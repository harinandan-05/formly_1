import { BiSolidUser } from "react-icons/bi";
import { BiSolidCity } from "react-icons/bi";

export default function Sidebar(){
    return (

        <div className="min-h-screen bg-stone-100 border border-stone-400 w-64">
            {/* avatar section */}
            <div className="max-w-64 flex p-2">
                <div className="flex gap-1 items-center mx-2">
                <BiSolidUser size={18} color="gray"/>
                <p className="text-lg font-semibold text-stone-700">testuser</p>
                </div>
                
            </div>


            <div className="flex flex-col gap-3 mt-4">

            {/* Home tab */}
            <div className="max-w-64 flex items-center">
                <div className="flex gap-1 items-center mx-4">
                    <BiSolidCity color="gray"/>
                    <p className="text-sm font-medium text-stone-600">Home</p>
                </div>
            </div>

            {/* analytics tab */}
            <div className="max-w-64 flex items-center">
                <div className="flex gap-1 items-center mx-4">
                    <BiSolidCity color="gray"/>
                    <p className="text-sm font-medium text-stone-600">Analytic</p>
                </div>
            </div>

            {/* settings */}
            <div className="max-w-64 flex items-center">
                <div className="flex gap-1 items-center mx-4">
                    <BiSolidCity color="gray"/>
                    <p className="text-sm font-medium text-stone-600">Settings</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}