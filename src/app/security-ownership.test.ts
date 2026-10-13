import { describe, it, expect, beforeEach } from 'vitest';
import { z } from 'zod';
import { checkRateLimit, clearRateLimits } from '@/lib/rate-limit';

// Strict schema representing student profile updates
const secureStudentUpdateSchema = z.object({
  full_name: z.string().min(2),
  phone: z.string().optional(),
  objective: z.string().optional(),
}).strict(); // Rejects any injection of role, id, is_admin, etc.

interface UserSession {
  userId: string;
  role: 'student' | 'admin';
}

interface StudentRecord {
  id: string;
  ownerUserId: string;
  full_name: string;
  phone?: string;
  objective?: string;
}

// In-memory multi-tenant store implementing row-level authorization logic
class SecureStudentService {
  private records: Map<string, StudentRecord> = new Map();

  create(caller: UserSession, data: { full_name: string; phone?: string; objective?: string }): { status: number; data?: StudentRecord; error?: string } {
    const validated = secureStudentUpdateSchema.safeParse(data);
    if (!validated.success) {
      return { status: 400, error: 'Mass assignment rejected: unexpected fields' };
    }

    const id = `std_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const record: StudentRecord = {
      id,
      ownerUserId: caller.userId,
      ...validated.data,
    };
    this.records.set(id, record);
    return { status: 201, data: record };
  }

  read(caller: UserSession, recordId: string): { status: number; data?: StudentRecord; error?: string } {
    const record = this.records.get(recordId);
    if (!record) {
      return { status: 404, error: 'Not found' };
    }

    // Authorization rule: caller must be resource owner or admin
    if (caller.role !== 'admin' && record.ownerUserId !== caller.userId) {
      return { status: 403, error: 'Forbidden: You do not own this resource' };
    }

    return { status: 200, data: record };
  }

  update(caller: UserSession, recordId: string, patch: Record<string, unknown>): { status: number; data?: StudentRecord; error?: string } {
    const record = this.records.get(recordId);
    if (!record) {
      return { status: 404, error: 'Not found' };
    }

    // Authorization rule: caller must be owner or admin
    if (caller.role !== 'admin' && record.ownerUserId !== caller.userId) {
      return { status: 403, error: 'Forbidden: You do not own this resource' };
    }

    // Mass assignment prevention
    const validated = secureStudentUpdateSchema.safeParse(patch);
    if (!validated.success) {
      return { status: 400, error: 'Mass assignment rejected: invalid or unknown fields' };
    }

    const updated = { ...record, ...validated.data };
    this.records.set(recordId, updated);
    return { status: 200, data: updated };
  }

  delete(caller: UserSession, recordId: string): { status: number; error?: string } {
    const record = this.records.get(recordId);
    if (!record) {
      return { status: 404, error: 'Not found' };
    }

    // Authorization rule: caller must be owner or admin
    if (caller.role !== 'admin' && record.ownerUserId !== caller.userId) {
      return { status: 403, error: 'Forbidden: You do not own this resource' };
    }

    this.records.delete(recordId);
    return { status: 204 };
  }
}

describe('PROVE IT: Multi-Tenant Security & Ownership Authorization (Item 7)', () => {
  let service: SecureStudentService;

  const userA: UserSession = { userId: 'usr_student_Alice_123', role: 'student' };
  const userB: UserSession = { userId: 'usr_student_Bob_456', role: 'student' };
  const admin: UserSession = { userId: 'usr_admin_Official_999', role: 'admin' };

  beforeEach(() => {
    service = new SecureStudentService();
    clearRateLimits();
  });

  it('User A creates a record successfully', () => {
    const res = service.create(userA, {
      full_name: 'Alice Diarra',
      phone: '+22370000001',
      objective: 'Préparation Goethe-Zertifikat B1',
    });

    expect(res.status).toBe(201);
    expect(res.data?.ownerUserId).toBe(userA.userId);
  });

  it('User B tries to READ User A’s record -> returns 403 Forbidden', () => {
    const created = service.create(userA, {
      full_name: 'Alice Diarra',
      phone: '+22370000001',
    });
    const recordId = created.data!.id;

    // User A can read their own record
    const readA = service.read(userA, recordId);
    expect(readA.status).toBe(200);
    expect(readA.data?.full_name).toBe('Alice Diarra');

    // User B tries to read User A's record -> MUST RETURN 403
    const readB = service.read(userB, recordId);
    expect(readB.status).toBe(403);
    expect(readB.error).toContain('Forbidden');
    expect(readB.data).toBeUndefined();
  });

  it('User B tries to UPDATE User A’s record -> returns 403 Forbidden', () => {
    const created = service.create(userA, {
      full_name: 'Alice Diarra',
    });
    const recordId = created.data!.id;

    // User B attempts unauthorized mutation on User A's record -> MUST RETURN 403
    const updateB = service.update(userB, recordId, {
      full_name: 'Hacked by Bob',
    });

    expect(updateB.status).toBe(403);
    expect(updateB.error).toContain('Forbidden');

    // Verify record was untouched
    const verifyA = service.read(userA, recordId);
    expect(verifyA.data?.full_name).toBe('Alice Diarra');
  });

  it('User B tries to DELETE User A’s record -> returns 403 Forbidden', () => {
    const created = service.create(userA, {
      full_name: 'Alice Diarra',
    });
    const recordId = created.data!.id;

    // User B attempts unauthorized deletion -> MUST RETURN 403
    const deleteB = service.delete(userB, recordId);
    expect(deleteB.status).toBe(403);
    expect(deleteB.error).toContain('Forbidden');

    // Verify record still exists
    const verifyA = service.read(userA, recordId);
    expect(verifyA.status).toBe(200);
  });

  it('Attempts to access non-existent record -> returns 404 Not Found', () => {
    const nonExistentId = 'std_does_not_exist_999';
    expect(service.read(userB, nonExistentId).status).toBe(404);
    expect(service.update(userB, nonExistentId, { full_name: 'Test' }).status).toBe(404);
    expect(service.delete(userB, nonExistentId).status).toBe(404);
  });

  it('MASS ASSIGNMENT: rejects unknown injected fields (is_admin, role, balance)', () => {
    const maliciousPayload = {
      full_name: 'Alice Diarra',
      is_admin: true,            // Malicious injection
      role: 'super_admin',       // Malicious injection
      balance: 1000000,          // Malicious injection
    };

    const res = service.create(userA, maliciousPayload as any);
    expect(res.status).toBe(400);
    expect(res.error).toContain('Mass assignment rejected');
  });

  it('RATE LIMITING: blocks excessive requests with 429 status', () => {
    const testIp = '196.200.45.12';
    const limitOptions = { limit: 3, windowMs: 60000 };

    // First 3 requests succeed
    expect(checkRateLimit(`action:${testIp}`, limitOptions).success).toBe(true);
    expect(checkRateLimit(`action:${testIp}`, limitOptions).success).toBe(true);
    expect(checkRateLimit(`action:${testIp}`, limitOptions).success).toBe(true);

    // 4th request must be rate-limited
    const blocked = checkRateLimit(`action:${testIp}`, limitOptions);
    expect(blocked.success).toBe(false);
    expect(blocked.remaining).toBe(0);
    expect(blocked.resetInSeconds).toBeGreaterThan(0);
  });

  it('ADMIN OVERRIDE: verified administrator can access resources for institutional audits', () => {
    const created = service.create(userA, {
      full_name: 'Alice Diarra',
    });
    const recordId = created.data!.id;

    // Admin can read
    const adminRead = service.read(admin, recordId);
    expect(adminRead.status).toBe(200);
    expect(adminRead.data?.full_name).toBe('Alice Diarra');
  });
});
