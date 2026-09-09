const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const sqlFile = path.join(__dirname, '..', 'supabase_schema.sql');
  const sql = fs.readFileSync(sqlFile, 'utf-8');
  
  // Split the SQL into individual statements
  const statements = sql
    .split(';')
    .map(s => s.trim())
    .filter(s => s.length > 0 && !s.startsWith('-- ='));

  console.log(`Executing ${statements.length} SQL statements...`);
  
  for (const statement of statements) {
    if (statement) {
      try {
        await prisma.$executeRawUnsafe(statement);
        console.log('Success:', statement.substring(0, 50) + '...');
      } catch (e) {
        console.error('Error executing:', statement.substring(0, 50) + '...', e.message);
      }
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
