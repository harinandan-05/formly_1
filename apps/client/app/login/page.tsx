"use client"
import { ImSpinner3 } from "react-icons/im"
import Google from '../icons/Google';
import AppleIcon from '../icons/Apple';
import { supabase } from '@repo/db/client';
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(){

    const router = useRouter();
    const [loading , setloading] = useState(false)

    async function googleAuth(provider: "google" | "apple") {
        const {error} = await supabase.auth.signInWithOAuth({
            provider,
            options:{
                redirectTo:`${window.location.origin}/auth/callback`
            }
        })

        if(error){
            console.log(error)
        }
    }



    return (
        <div className="w-full bg-white min-h-screen">
            <div className='flex flex-col items-center justify-center '>
                <div className=''>
                    <div className='mt-20'>
                        <ImSpinner3  size={32}  />
                    </div>
                    <h1 className='mt-14 text-stone-900 text-2xl font-bold'>Welcome back</h1>

                    <button className='flex border-2 border-stone-200 rounded-md py-1 w-82 gap-2 justify-center mt-6 hover:bg-stone-100 font-semibold text-stone-500'>
                        <Google />

                        <span className='text-md' onClick={() => googleAuth("google")}>
                            Continue with Google
                        </span>
                    </button>
                    <button className='flex border-2 border-stone-200 rounded-md py-1 w-82 justify-center gap-2 mt-3 hover:bg-stone-100 font-semibold text-stone-500'>
                        <AppleIcon />
                        <span className='text-md'>
                            Continue with Apple
                        </span>
                    </button>
                </div>

                <div className='h-px bg-stone-300 w-82 mt-10'>

                </div>


                {/* email password login section */}

                <div>
                    <div className='flex flex-col mt-10'>
                        
                        <label className='font-bold'>Email</label>
                        <input type='email' className='border border-stone-300 w-82 shadow-sm p-1.5 rounded-md mt-2 focus:outline-yellow-300 focus:outline-3' />
                        <label className='font-bold mt-4'>Password</label>
                        <input type='text' className='border border-stone-200 w-82 shadow-sm rounded p-1.5 focus:outline-yellow-300 focus:outline-3 md mt-2' />
                        
                    </div>
                </div>

                {/* Login button */}


                <div>
                    <button className='bg-black rounded-md mt-6 text-white font-bold w-82 justify-center p-2 hover:bg-stone-700'>
                        Continue
                    </button>
                </div>

                <div className='mr-24 mt-4 text-stone-700 text-sm '>
                    <p>Dont have an account yet? <a href='http://localhost:3000/signup' className='underline'>Signup</a></p>
                    <p>Forgot password? <a href='http://localhost:3000/landing' className='underline'>Reset</a></p>
                </div>
            </div>
        </div>
    )
}