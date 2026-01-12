"use client"
import { useRef, useState } from "react"
import { DropdownUi } from "@/ui/dropdown/dropdown"
export default function EditableUi(){
    const Blockref = useRef<HTMLHeadingElement | null>(null)
    const [dropdown,setdropdown] = useState(false)

    return (
        <div className="bg-white w-full min-h-screen flex flex-col">
            {/* Title card */}
            <h1 contentEditable='true'
            data-placeholder = "Form Title"
             className="mt-40 ml-100 
            text-4xl text-gray-800
            font-extrabold outline-0 max-w-150
            empty:before:content-[attr(data-placeholder)]
            empty:before:text-gray-300"
            onKeyDown={(event) => {
                if(event.key === "Enter"){
                    event.preventDefault()
                    Blockref.current?.focus()
                }
            }}>
            </h1>
            
            <div ref={Blockref} contentEditable='true'
            data-holder = 'type / to enter blocks'
            className="text-gray-600 font-medium
            outline-0
            empty:before:content-[attr(data-holder)]
            empty:before:text-gray-300
            ml-100 mt-10
            max-w-140"
            onInput={(e) =>{
                const val = e.currentTarget;
                const text = val.textContent

                if(text?.endsWith('/')){
                    setdropdown(true)
                }
            }}
            />
          {dropdown && <DropdownUi/>}
        </div>
    )
}
