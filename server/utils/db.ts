import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { schema } from '../db/schema'

const config = useRuntimeConfig()

export const sql = postgres({ ...config.pg })
export const db = drizzle(sql, { schema })
