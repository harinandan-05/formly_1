"use client"

import {supabase} from '@repo/db/client'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Callback(){

    const router = useRouter()

    useEffect(() =>{
        async function handleAuth(){
            const {data , error} = await supabase.auth.getSession()

            if(error){
                router.push('/login')
            }

            if(data.session){
                router.push('/dashboard')
            }
        }

        handleAuth()
    },[router])

    return (
        <div>
            signing you in.....
        </div>
    )
}