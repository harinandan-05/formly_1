import 'dotenv/config'
import express from 'express'
import {supabase} from '@repo/db/client' 
import {Prisma} from '@repo/prisma-db'


const app = express()
const port  = 3001
app.listen(port,() =>{
    console.log(`server up at port: ${port}`)
})


export async function Test(){
  try {
    const result = await Prisma.user.create({
      data:{
        email:"harinandan@gmail.com",
        name:"harinandan"
      }
    })
    console.log("User created:", result)
  } catch (error) {
    console.error("Error creating user:", error)
  }
}

Test()