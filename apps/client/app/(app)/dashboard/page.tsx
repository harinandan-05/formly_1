"use client"

import { useRouter } from "next/navigation"

export default function Dashboard(){
    const router = useRouter()

    return (
        <div className="text-center mt-64">
            <div>
                <p className="text-lg font-bold">No forms yet!</p>
                <p className="text-stone-500">Roll up your sleeves and let’s get started.<br/>
                    It's as simple as one-two-three.</p>
                <button className="bg-green-400 p-1 mt-3 rounded-sm font-semibold px-3 cursor-pointer hover:bg-green-500" 
                onClick={() => router.push('/form/asd/edit')}>+ New form</button>
            </div>
        </div>
    )
}