C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:1:-- CreateSchema
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:2:CREATE SCHEMA IF NOT EXISTS "auth";
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:3:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:4:-- CreateSchema
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:5:CREATE SCHEMA IF NOT EXISTS "public";
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:6:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:7:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:9:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:10:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:12:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:13:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:15:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:16:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:18:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:19:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:21:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:22:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:24:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:25:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:27:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:28:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:30:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:31:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:33:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:34:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:35:CREATE TYPE "public"."learning_level_code" AS ENUM ('A1', 'A2', 'B1', 'B2');
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:36:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:37:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:38:CREATE TYPE "public"."student_status" AS ENUM ('inscrit', 'actif', 'suspendu', 'termine', 'abandon');
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:39:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:40:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:41:CREATE TYPE "public"."teacher_status" AS ENUM ('permanent', 'vacataire', 'independant', 'intermittent');
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:42:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:43:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:44:CREATE TYPE "public"."course_type" AS ENUM ('individuel', 'groupe', 'intensif', 'preparation_examen', 'conversation');
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:45:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:46:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:47:CREATE TYPE "public"."attendance_status" AS ENUM ('present', 'absent', 'retard', 'excuse');
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:48:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:49:-- CreateEnum
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:50:CREATE TYPE "public"."assessment_status" AS ENUM ('en_cours', 'valide', 'refuse', 'renforcement');
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:51:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:52:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:54:    "instance_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:55:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:56:    "payload" JSON,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:57:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:58:    "ip_address" VARCHAR(64) NOT NULL DEFAULT '',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:59:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:60:    CONSTRAINT "audit_log_entries_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:61:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:62:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:63:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:65:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:66:    "provider_type" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:67:    "identifier" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:68:    "name" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:69:    "client_id" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:70:    "client_secret" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:71:    "acceptable_client_ids" TEXT[] DEFAULT ARRAY[]::TEXT[],
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:72:    "scopes" TEXT[] DEFAULT ARRAY[]::TEXT[],
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:73:    "pkce_enabled" BOOLEAN NOT NULL DEFAULT true,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:74:    "attribute_mapping" JSONB NOT NULL DEFAULT '{}',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:75:    "authorization_params" JSONB NOT NULL DEFAULT '{}',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:76:    "enabled" BOOLEAN NOT NULL DEFAULT true,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:77:    "email_optional" BOOLEAN NOT NULL DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:78:    "issuer" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:79:    "discovery_url" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:80:    "skip_nonce_check" BOOLEAN NOT NULL DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:81:    "cached_discovery" JSONB,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:82:    "discovery_cached_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:83:    "authorization_url" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:84:    "token_url" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:85:    "userinfo_url" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:86:    "jwks_uri" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:87:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:88:    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:89:    "custom_claims_allowlist" TEXT[] DEFAULT ARRAY[]::TEXT[],
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:90:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:91:    CONSTRAINT "custom_oauth_providers_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:92:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:93:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:94:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:96:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:97:    "user_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:98:    "auth_code" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:100:    "code_challenge" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:101:    "provider_type" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:102:    "provider_access_token" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:103:    "provider_refresh_token" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:104:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:105:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:106:    "authentication_method" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:107:    "auth_code_issued_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:108:    "invite_token" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:109:    "referrer" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:110:    "oauth_client_state_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:111:    "linking_target_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:112:    "email_optional" BOOLEAN NOT NULL DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:113:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:114:    CONSTRAINT "flow_state_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:115:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:116:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:117:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:119:    "provider_id" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:120:    "user_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:121:    "identity_data" JSONB NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:122:    "provider" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:123:    "last_sign_in_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:124:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:125:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:126:    "email" TEXT DEFAULT lower((identity_data ->> 'email'::text)),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:127:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:128:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:129:    CONSTRAINT "identities_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:130:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:131:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:132:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:134:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:135:    "uuid" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:136:    "raw_base_config" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:137:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:138:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:139:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:140:    CONSTRAINT "instances_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:141:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:142:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:143:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:145:    "session_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:146:    "created_at" TIMESTAMPTZ(6) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:147:    "updated_at" TIMESTAMPTZ(6) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:148:    "authentication_method" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:149:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:150:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:151:    CONSTRAINT "amr_id_pk" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:152:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:153:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:154:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:156:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:157:    "factor_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:158:    "created_at" TIMESTAMPTZ(6) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:159:    "verified_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:160:    "ip_address" INET NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:161:    "otp_code" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:162:    "web_authn_session_data" JSONB,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:163:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:164:    CONSTRAINT "mfa_challenges_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:165:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:166:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:167:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:169:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:170:    "user_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:171:    "friendly_name" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:174:    "created_at" TIMESTAMPTZ(6) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:175:    "updated_at" TIMESTAMPTZ(6) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:176:    "secret" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:177:    "phone" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:178:    "last_challenged_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:179:    "web_authn_credential" JSONB,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:180:    "web_authn_aaguid" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:181:    "last_webauthn_challenge_data" JSONB,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:182:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:183:    CONSTRAINT "mfa_factors_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:184:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:185:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:186:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:188:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:189:    "authorization_id" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:190:    "client_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:191:    "user_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:192:    "redirect_uri" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:193:    "scope" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:194:    "state" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:195:    "resource" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:196:    "code_challenge" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:200:    "authorization_code" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:201:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:202:    "expires_at" TIMESTAMPTZ(6) NOT NULL DEFAULT (now() + '00:03:00'::interval),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:203:    "approved_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:204:    "nonce" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:205:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:206:    CONSTRAINT "oauth_authorizations_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:207:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:208:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:209:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:211:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:212:    "provider_type" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:213:    "code_verifier" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:214:    "created_at" TIMESTAMPTZ(6) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:215:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:216:    CONSTRAINT "oauth_client_states_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:217:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:218:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:219:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:221:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:222:    "client_secret_hash" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:224:    "redirect_uris" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:225:    "grant_types" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:226:    "client_name" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:227:    "client_uri" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:228:    "logo_uri" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:229:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:230:    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:231:    "deleted_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:233:    "token_endpoint_auth_method" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:234:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:235:    CONSTRAINT "oauth_clients_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:236:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:237:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:238:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:240:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:241:    "user_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:242:    "client_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:243:    "scopes" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:244:    "granted_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:245:    "revoked_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:246:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:247:    CONSTRAINT "oauth_consents_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:248:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:249:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:250:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:252:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:253:    "user_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:255:    "token_hash" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:256:    "relates_to" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:257:    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:258:    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:259:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:260:    CONSTRAINT "one_time_tokens_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:261:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:262:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:263:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:265:    "instance_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:266:    "id" BIGSERIAL NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:267:    "token" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:268:    "user_id" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:269:    "revoked" BOOLEAN,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:270:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:271:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:272:    "parent" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:273:    "session_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:274:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:275:    CONSTRAINT "refresh_tokens_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:276:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:277:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:278:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:280:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:281:    "sso_provider_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:282:    "entity_id" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:283:    "metadata_xml" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:284:    "metadata_url" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:285:    "attribute_mapping" JSONB,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:286:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:287:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:288:    "name_id_format" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:289:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:290:    CONSTRAINT "saml_providers_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:291:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:292:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:293:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:295:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:296:    "sso_provider_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:297:    "request_id" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:298:    "for_email" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:299:    "redirect_to" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:300:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:301:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:302:    "flow_state_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:303:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:304:    CONSTRAINT "saml_relay_states_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:305:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:306:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:307:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:309:    "version" VARCHAR(255) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:310:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:311:    CONSTRAINT "schema_migrations_pkey" PRIMARY KEY ("version")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:312:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:313:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:314:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:316:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:317:    "user_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:318:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:319:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:320:    "factor_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:322:    "not_after" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:323:    "refreshed_at" TIMESTAMP(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:324:    "user_agent" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:325:    "ip" INET,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:326:    "tag" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:327:    "oauth_client_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:328:    "refresh_token_hmac_key" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:329:    "refresh_token_counter" BIGINT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:330:    "scopes" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:331:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:332:    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:333:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:334:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:335:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:337:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:338:    "sso_provider_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:339:    "domain" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:340:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:341:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:342:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:343:    CONSTRAINT "sso_domains_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:344:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:345:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:346:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:348:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:349:    "resource_id" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:350:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:351:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:352:    "disabled" BOOLEAN,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:353:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:354:    CONSTRAINT "sso_providers_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:355:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:356:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:357:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:359:    "instance_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:360:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:361:    "aud" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:362:    "role" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:363:    "email" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:364:    "encrypted_password" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:365:    "email_confirmed_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:366:    "invited_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:367:    "confirmation_token" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:368:    "confirmation_sent_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:369:    "recovery_token" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:370:    "recovery_sent_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:371:    "email_change_token_new" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:372:    "email_change" VARCHAR(255),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:373:    "email_change_sent_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:374:    "last_sign_in_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:375:    "raw_app_meta_data" JSONB,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:376:    "raw_user_meta_data" JSONB,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:377:    "is_super_admin" BOOLEAN,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:378:    "created_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:379:    "updated_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:380:    "phone" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:381:    "phone_confirmed_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:382:    "phone_change" TEXT DEFAULT '',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:383:    "phone_change_token" VARCHAR(255) DEFAULT '',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:384:    "phone_change_sent_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:385:    "confirmed_at" TIMESTAMPTZ(6) DEFAULT LEAST(email_confirmed_at, phone_confirmed_at),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:386:    "email_change_token_current" VARCHAR(255) DEFAULT '',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:387:    "email_change_confirm_status" SMALLINT DEFAULT 0,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:388:    "banned_until" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:389:    "reauthentication_token" VARCHAR(255) DEFAULT '',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:390:    "reauthentication_sent_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:391:    "is_sso_user" BOOLEAN NOT NULL DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:392:    "deleted_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:393:    "is_anonymous" BOOLEAN NOT NULL DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:394:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:395:    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:396:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:397:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:398:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:400:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:401:    "user_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:402:    "challenge_type" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:403:    "session_data" JSONB NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:404:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:405:    "expires_at" TIMESTAMPTZ(6) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:406:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:407:    CONSTRAINT "webauthn_challenges_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:408:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:409:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:410:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:412:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:413:    "user_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:414:    "credential_id" BYTEA NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:415:    "public_key" BYTEA NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:416:    "attestation_type" TEXT NOT NULL DEFAULT '',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:417:    "aaguid" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:418:    "sign_count" BIGINT NOT NULL DEFAULT 0,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:419:    "transports" JSONB NOT NULL DEFAULT '[]',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:420:    "backup_eligible" BOOLEAN NOT NULL DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:421:    "backed_up" BOOLEAN NOT NULL DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:422:    "friendly_name" TEXT NOT NULL DEFAULT '',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:423:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:424:    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:425:    "last_used_at" TIMESTAMPTZ(6),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:426:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:427:    CONSTRAINT "webauthn_credentials_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:428:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:429:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:430:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:431:CREATE TABLE "public"."experiences" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:432:    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:433:    "profile_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:434:    "company_name" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:435:    "job_title" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:436:    "start_date" DATE NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:437:    "end_date" DATE,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:438:    "is_current" BOOLEAN DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:439:    "sector" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:440:    "description" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:441:    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:442:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:443:    CONSTRAINT "experiences_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:444:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:445:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:446:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:447:CREATE TABLE "public"."job_offers" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:448:    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:449:    "title" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:450:    "company" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:451:    "description" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:452:    "location" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:453:    "type" TEXT DEFAULT 'CDI',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:454:    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:455:    "is_active" BOOLEAN DEFAULT true,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:456:    "author_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:457:    "contact_email" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:458:    "target_specialty" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:459:    "salary_range" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:460:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:461:    CONSTRAINT "job_offers_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:462:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:463:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:464:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:465:CREATE TABLE "public"."profiles" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:466:    "id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:467:    "full_name" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:468:    "promo_year" INTEGER NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:469:    "specialty" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:470:    "phone" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:471:    "city" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:472:    "country" TEXT DEFAULT 'MA',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:473:    "status" TEXT DEFAULT 'En recherche',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:474:    "avatar_url" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:475:    "bio" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:476:    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:477:    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:478:    "is_email_public" BOOLEAN DEFAULT true,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:479:    "is_contact_public" BOOLEAN DEFAULT false,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:480:    "email" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:481:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:482:    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:483:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:484:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:485:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:486:CREATE TABLE "public"."user_roles" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:487:    "id" UUID NOT NULL DEFAULT uuid_generate_v4(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:488:    "user_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:489:    "role" TEXT DEFAULT 'alumni',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:490:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:491:    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:492:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:493:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:494:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:495:CREATE TABLE "public"."b2b_requests" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:496:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:497:    "company" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:498:    "contact_name" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:499:    "email" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:500:    "phone" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:501:    "sector" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:502:    "candidates_count" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:503:    "message" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:504:    "status" TEXT DEFAULT 'nouveau',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:505:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:506:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:507:    CONSTRAINT "b2b_requests_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:508:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:509:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:510:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:511:CREATE TABLE "public"."contacts" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:512:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:513:    "name" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:514:    "email" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:515:    "phone" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:516:    "message" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:517:    "language" TEXT DEFAULT 'fr',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:518:    "status" TEXT DEFAULT 'nouveau',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:519:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:520:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:521:    CONSTRAINT "contacts_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:522:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:523:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:524:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:525:CREATE TABLE "public"."learning_levels" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:526:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:527:    "code" "public"."learning_level_code" NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:528:    "label" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:529:    "description" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:530:    "sort_order" INTEGER NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:531:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:532:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:533:    CONSTRAINT "learning_levels_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:534:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:535:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:536:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:537:CREATE TABLE "public"."students" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:538:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:539:    "user_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:540:    "level_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:541:    "full_name" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:542:    "email" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:543:    "phone" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:544:    "status" "public"."student_status" NOT NULL DEFAULT 'inscrit',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:545:    "objective" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:546:    "notes" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:547:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:548:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:549:    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:550:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:551:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:552:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:553:CREATE TABLE "public"."teachers" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:554:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:555:    "user_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:556:    "full_name" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:557:    "email" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:558:    "phone" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:559:    "specialization" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:560:    "hourly_rate" DECIMAL(10,2),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:561:    "status" "public"."teacher_status" NOT NULL DEFAULT 'vacataire',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:562:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:563:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:564:    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:565:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:566:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:567:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:568:CREATE TABLE "public"."courses" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:569:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:570:    "title" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:571:    "course_type" "public"."course_type" NOT NULL DEFAULT 'groupe',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:572:    "level_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:573:    "teacher_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:574:    "schedule" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:575:    "room" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:576:    "start_date" TIMESTAMP(3),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:577:    "end_date" TIMESTAMP(3),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:578:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:579:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:580:    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:581:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:582:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:583:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:584:CREATE TABLE "public"."course_enrollments" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:585:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:586:    "student_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:587:    "course_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:588:    "started_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:589:    "ended_at" TIMESTAMP(3),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:590:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:591:    CONSTRAINT "course_enrollments_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:592:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:593:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:594:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:595:CREATE TABLE "public"."student_attendances" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:596:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:597:    "student_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:598:    "course_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:599:    "attended_on" TIMESTAMP(3) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:600:    "status" "public"."attendance_status" NOT NULL DEFAULT 'present',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:601:    "note" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:602:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:603:    CONSTRAINT "student_attendances_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:604:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:605:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:606:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:607:CREATE TABLE "public"."assessments" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:608:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:609:    "student_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:610:    "course_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:611:    "level_id" UUID,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:612:    "assessed_on" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:613:    "total_score" DECIMAL(5,2),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:614:    "status" "public"."assessment_status" NOT NULL DEFAULT 'en_cours',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:615:    "comment" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:616:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:617:    CONSTRAINT "assessments_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:618:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:619:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:620:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:621:CREATE TABLE "public"."assessment_criteria" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:622:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:623:    "assessment_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:624:    "label" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:625:    "score" DECIMAL(5,2) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:626:    "max_score" DECIMAL(5,2) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:627:    "note" TEXT,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:628:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:629:    CONSTRAINT "assessment_criteria_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:630:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:631:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:632:-- CreateTable
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:633:CREATE TABLE "public"."payrolls" (
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:634:    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:635:    "teacher_id" UUID NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:636:    "month" TEXT NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:637:    "hours_worked" DECIMAL(10,2) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:638:    "gross_amount" DECIMAL(10,2) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:639:    "bonus" DECIMAL(10,2) NOT NULL DEFAULT 0,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:640:    "deductions" DECIMAL(10,2) NOT NULL DEFAULT 0,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:641:    "net_amount" DECIMAL(10,2) NOT NULL,
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:642:    "status" TEXT NOT NULL DEFAULT 'pending',
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:643:    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT timezone('utc'::text, now()),
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:644:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:645:    CONSTRAINT "payrolls_pkey" PRIMARY KEY ("id")
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:646:);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:647:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:648:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:650:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:651:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:653:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:654:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:656:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:657:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:659:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:660:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:662:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:663:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:665:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:666:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:668:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:669:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:671:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:672:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:674:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:675:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:677:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:678:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:680:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:681:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:683:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:684:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:686:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:687:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:689:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:690:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:692:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:693:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:695:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:696:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:698:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:699:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:701:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:702:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:704:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:705:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:707:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:708:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:710:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:711:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:713:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:714:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:716:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:717:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:719:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:720:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:722:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:723:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:725:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:726:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:728:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:729:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:731:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:732:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:734:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:735:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:737:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:738:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:740:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:741:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:743:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:744:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:746:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:747:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:749:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:750:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:752:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:753:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:755:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:756:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:758:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:759:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:761:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:762:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:764:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:765:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:767:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:768:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:770:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:771:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:773:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:774:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:776:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:777:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:779:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:780:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:782:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:783:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:785:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:786:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:788:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:789:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:791:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:792:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:794:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:795:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:797:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:798:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:800:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:801:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:802:CREATE INDEX "idx_experiences_profile" ON "public"."experiences"("profile_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:803:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:804:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:805:CREATE INDEX "idx_profiles_full_name" ON "public"."profiles"("full_name");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:806:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:807:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:808:CREATE INDEX "idx_profiles_promo" ON "public"."profiles"("promo_year");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:809:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:810:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:811:CREATE INDEX "idx_profiles_status" ON "public"."profiles"("status");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:812:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:813:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:814:CREATE UNIQUE INDEX "user_roles_user_id_key" ON "public"."user_roles"("user_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:815:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:816:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:817:CREATE INDEX "idx_user_roles_user_id" ON "public"."user_roles"("user_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:818:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:819:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:820:CREATE INDEX "idx_b2b_created_at" ON "public"."b2b_requests"("created_at" DESC);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:821:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:822:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:823:CREATE INDEX "idx_contacts_created_at" ON "public"."contacts"("created_at" DESC);
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:824:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:825:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:826:CREATE UNIQUE INDEX "learning_levels_code_key" ON "public"."learning_levels"("code");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:827:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:828:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:829:CREATE INDEX "idx_learning_levels_sort_order" ON "public"."learning_levels"("sort_order");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:830:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:831:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:832:CREATE INDEX "idx_students_level_id" ON "public"."students"("level_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:833:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:834:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:835:CREATE INDEX "idx_students_status" ON "public"."students"("status");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:836:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:837:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:838:CREATE INDEX "idx_teachers_status" ON "public"."teachers"("status");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:839:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:840:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:841:CREATE INDEX "idx_courses_level_id" ON "public"."courses"("level_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:842:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:843:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:844:CREATE INDEX "idx_courses_teacher_id" ON "public"."courses"("teacher_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:845:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:846:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:847:CREATE UNIQUE INDEX "course_enrollments_student_course_unique" ON "public"."course_enrollments"("student_id", "course_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:848:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:849:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:850:CREATE UNIQUE INDEX "student_attendance_unique" ON "public"."student_attendances"("student_id", "course_id", "attended_on");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:851:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:852:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:853:CREATE INDEX "idx_assessments_student_id" ON "public"."assessments"("student_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:854:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:855:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:856:CREATE INDEX "idx_assessment_criteria_assessment_id" ON "public"."assessment_criteria"("assessment_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:857:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:858:-- CreateIndex
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:859:CREATE INDEX "idx_payrolls_teacher_id" ON "public"."payrolls"("teacher_id");
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:860:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:861:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:863:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:864:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:866:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:867:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:869:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:870:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:872:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:873:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:875:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:876:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:878:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:879:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:881:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:882:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:884:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:885:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:887:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:888:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:890:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:891:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:893:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:894:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:896:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:897:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:899:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:900:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:902:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:903:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:905:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:906:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:908:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:909:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:911:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:912:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:914:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:915:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:916:ALTER TABLE "public"."experiences" ADD CONSTRAINT "experiences_profile_id_fkey" FOREIGN KEY ("profile_id") REFERENCES "public"."profiles"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:917:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:918:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:920:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:921:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:923:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:924:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:926:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:927:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:929:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:930:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:931:ALTER TABLE "public"."students" ADD CONSTRAINT "students_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "public"."learning_levels"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:932:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:933:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:935:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:936:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:937:ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "public"."learning_levels"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:938:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:939:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:940:ALTER TABLE "public"."courses" ADD CONSTRAINT "courses_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "public"."teachers"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:941:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:942:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:943:ALTER TABLE "public"."course_enrollments" ADD CONSTRAINT "course_enrollments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:944:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:945:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:946:ALTER TABLE "public"."course_enrollments" ADD CONSTRAINT "course_enrollments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:947:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:948:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:949:ALTER TABLE "public"."student_attendances" ADD CONSTRAINT "student_attendances_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:950:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:951:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:952:ALTER TABLE "public"."student_attendances" ADD CONSTRAINT "student_attendances_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:953:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:954:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:955:ALTER TABLE "public"."assessments" ADD CONSTRAINT "assessments_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "public"."students"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:956:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:957:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:958:ALTER TABLE "public"."assessments" ADD CONSTRAINT "assessments_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "public"."courses"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:959:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:960:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:961:ALTER TABLE "public"."assessments" ADD CONSTRAINT "assessments_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "public"."learning_levels"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:962:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:963:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:964:ALTER TABLE "public"."assessment_criteria" ADD CONSTRAINT "assessment_criteria_assessment_id_fkey" FOREIGN KEY ("assessment_id") REFERENCES "public"."assessments"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:965:
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:966:-- AddForeignKey
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:967:ALTER TABLE "public"."payrolls" ADD CONSTRAINT "payrolls_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "public"."teachers"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
C:\Users\tinkpad\Desktop\Mes Nouveaux Projets\Deutch pro bko\prisma\setup_db_utf8.sql:968:
