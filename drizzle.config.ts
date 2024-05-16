import type { Config } from 'drizzle-kit';

const DATABASE_URL = process.env.DATABASE_URL || 'http://127.0.0.1:8080';
const DATABASE_AUTH_TOKEN = process.env.DATABASE_AUTH_TOKEN || '';

export default {
  schema: './src/db/drizzle.schema.ts',
  out: './src/db/migrations',
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN
  },
} satisfies Config;