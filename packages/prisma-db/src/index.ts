import 'dotenv/config'
import { PrismaClient } from './generated/client.js'
import { PrismaPg } from '@prisma/adapter-pg'


console.log(process.env.DATABASE_URL,"db url")
export const Prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL
  })
  
})
