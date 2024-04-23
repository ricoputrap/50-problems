import type { Config } from 'drizzle-kit';

const DATABASE_URL = process.env.DATABASE_URL || 'http://127.0.0.1:8080';

export default {
  schema: './src/db/drizzle.schema.ts',
  out: './src/db/migrations',
  driver: 'libsql', // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: DATABASE_URL,
  },
} satisfies Config;