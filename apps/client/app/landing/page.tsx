"use client"
import { DiPostgresql ,DiStackoverflow ,DiNpm ,DiApple ,DiSwift,DiSass,DiUnitySmall,DiPhp } from "react-icons/di";

export default function Landing(){
    
    return (
        <div className="bg-white w-full min-h-screen overflow-hidden">
            <nav className="w-full relative">
                <div className="px-3 mx-auto max-w-7xl mt-4 ">
                    <div className="flex justify-between  items-center">
                        {/* Logo */}
                        <div className="text-3xl cursor-pointer font-bold font-serif">
                            ~Formly
                        </div>
                        <div className="hidden md:flex items-center gap-5">
                            <div className="cursor-pointer font-semibold text-gray-600">
                            Pricing
                        </div>
                        <div className="pl-5 cursor-pointer font-semibold text-gray-600">
                            Log in
                        </div>
                        <div className="pl-5 cursor-pointer font-semibold text-gray-600">
                            Sign up
                        </div>
                        <button className="bg-yellow-300 font-semibold rounded-sm w-auto px-2 py-1 cursor-pointer">
                            Create form
                        </button>
                        </div>
                    </div>
                    <div className="flex gap-4 absolute right-5 bottom-2 items-center md:hidden">
                        <div className="font-medium cursor-pointer">
                            Login
                    </div>
                    <div className="font-medium cursor-pointer">
                        Sign up
                    </div>
                    </div>
                </div>
            </nav>

            {/* hero section */}
            <section className="w-full mt-40">
                <div className="w-full max-w-7xl mx-auto px-7">
                        <div className="flex flex-col gap-5 ">
                            <h1 className="text-3xl md:text-6xl font-bold leading-tight text-center">The simplest way to create forms</h1>
                            <p className="px-1 text-md md:text-[19px] font-medium text-gray-800 text-center">
                                Say goodbye to boring forms. Meet formly — the free, intuitive form builder you’ve been looking for.
                            </p>
                            <button className="bg-yellow-300 p-2 font-semibold mt-4 rounded-md self-center md:self-center">
                                Create a free Form  ››
                            </button>
                            <p className='text-center text-sm md:text-md'>
                                No signup required
                            </p>
                            <p className="text-center text-sm mt-20 md:text-md ">
                                Powering 500,000+ teams at the world’s best companies
                            </p>
                        </div>
                </div>
            </section>

            {/* partners icons section */}

            <section className="w-full mt-8">
                <div className="w-full max-w-7xl mx-auto flex gap-15 px-50">
                    <div className="">
                        <DiPostgresql size={60} />
                    </div>
                    <div>
                        <DiApple size={60} />
                    </div>
                    <div>
                        <DiNpm size={60}  />
                    </div>
                    <div>
                        <DiStackoverflow  size={60} />
                    </div>
                    <div>
                        <DiSwift size={60}/>
                    </div>
                    <div>
                        <DiSass size={60}/>
                    </div>
                    <div>
                        <DiPhp size={60}/>
                    </div>
                    <div>
                        <DiUnitySmall size={60}/>
                    </div>
                </div>
            </section>
        </div>
    )
}