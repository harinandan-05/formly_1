import 'dotenv/config'
import express from 'express'
import {supabase} from '@repo/db/client' 
import {Prisma} from '@repo/prisma-db'


const app = express()
const port  = 3001
app.listen(port,() =>{
    console.log(`server up at port: ${port}`)
})

