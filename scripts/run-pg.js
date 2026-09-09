const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function main() {
  const sqlFile = path.join(__dirname, '..', 'supabase_schema.sql');
  const sql = fs.readFileSync(sqlFile, 'utf-8');
  
  // Use DIRECT_URL since it's meant for migrations (port 5432)
  // If DIRECT_URL isn't in env directly, we extract from .env
  const envContent = fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf-8');
  const match = envContent.match(/DIRECT_URL="([^"]+)"/);
  if (!match) {
    throw new Error('DIRECT_URL not found in .env');
  }
  const connectionString = match[1];

  const client = new Client({ connectionString });
  
  try {
    await client.connect();
    console.log('Connected to Supabase via pg');
    
    // Execute the whole script at once
    await client.query(sql);
    console.log('Successfully created tables and policies!');
    
  } catch (err) {
    console.error('Error executing SQL:', err);
  } finally {
    await client.end();
  }
}

main();
