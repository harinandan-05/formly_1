"use client"
import { useState } from "react"

export default function Landing(){
    const [open , setOpen] = useState(false)
    return (
        <div className="bg-white w-full min-h-screen">
            <nav className="w-full">
                <div className="px-3 mx-auto max-w-7xl mt-4 ">
                    <div className="flex justify-between  items-center">
                        {/* Logo */}
                        <div className="font-bold  text-3xl cursor-pointer">
                            *Formly
                        </div>
                        <div className="hidden md:flex items-center gap-5">
                            <div className="cursor-pointer text-gray-600">
                            Pricing
                        </div>
                        <div className="pl-5 cursor-pointer text-gray-600">
                            Log in
                        </div>
                        <div className="pl-5 cursor-pointer text-gray-600">
                            Sign up
                        </div>
                        <button className="bg-yellow-300 rounded-sm w-auto p-1 cursor-pointer">
                            create form
                        </button>
                        </div>
                        <div className="text-4xl pr-4" onClick={() => setOpen(!open)}>
                            {open ? <button>✕</button> : <button>☰</button>}
                        </div>
                    </div>
                    <div>
                        {open && (
                            <div className="md:hidden absolute right-11 border border-gray-200 rounded-md shadow-md p-4 flex flex-col gap-4">
                                <div>
                                    Pricing
                                </div>
                                <div>
                                    Log in
                                </div>
                                <div className="">
                                    Sign up
                                </div>
                                <button className="bg-yellow-300 rounded-sm p-1 font-medium">
                                    Create Form
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    )
}