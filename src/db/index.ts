import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const DATABASE_URL = process.env.DATABASE_URL || 'http://127.0.0.1:8080';
const DATABASE_AUTH_TOKEN = process.env.DATABASE_AUTH_TOKEN || '';

const client = createClient({ url: DATABASE_URL, authToken: DATABASE_AUTH_TOKEN });
const db = drizzle(client);

export default db;