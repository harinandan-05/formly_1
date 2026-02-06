"use client"
import { HugeiconsIcon } from '@hugeicons/react';
import {GoogleIcon , AppleIcon} from '@hugeicons/core-free-icons'


export default function Login(){


    return (
        <div className="w-full bg-white min-h-screen">
            <div className='flex flex-col items-center justify-center '>
                <div className=''>
                    <h1 className='mt-36 text-stone-900 text-2xl font-semibold'>Welcome Back!</h1>

                    <button className='flex border-2 border-stone-200 rounded-md py-1 px-16 gap-2 mt-6 hover:bg-stone-100 font-semibold text-stone-500'>
                        <HugeiconsIcon
                        size={22}
                        color='black'
                        strokeWidth={2}
                        icon={GoogleIcon}
                        />

                        <span className='text-md'>
                            Continue with Google
                        </span>
                    </button>
                    <button className='flex border-2 border-stone-200 rounded-md py-1 px-18 gap-2 mt-4 hover:bg-stone-100 font-semibold text-stone-500'>
                        <HugeiconsIcon
                        size={22}
                        color='black'
                        strokeWidth={2}
                        icon={AppleIcon}
                        />
                        <span className='text-md'>
                            Continue with Apple
                        </span>
                    </button>
                </div>


                {/* email password login section */}

                <div>
                    <div className='flex flex-col mt-28'>
                        
                        <label className='font-bold'>Email</label>
                        <input type='email' className='border border-stone-300 w-82 shadow-md p-1.5 rounded-md mt-2 focus:outline-yellow-300 focus:outline-3' />
                        <label className='font-bold mt-4'>Password</label>
                        <input type='text' className='border border-stone-200 w-82 shadow-md rounded p-1.5 focus:outline-yellow-300 focus:outline-3 md mt-2' />
                        
                    </div>
                </div>

                {/* Login button */}


                <div>
                    <button className='bg-black rounded-md mt-6 text-white font-bold px-32 p-2 hover:bg-stone-700'>
                        Continue
                    </button>
                </div>

                <div className='mr-24 mt-4 text-stone-700 text-sm '>
                    <p>Dont have an account yet? <a href='http://localhost:3000/landing' className='underline'>Signup</a></p>
                    <p>Forgot password? <a href='http://localhost:3000/landing' className='underline'>Reset</a></p>
                </div>
            </div>
        </div>
    )
}