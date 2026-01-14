"use client"
import { UUID } from "crypto"
import { Ref, Reference, useEffect, useRef, useState } from "react"

type Blockprop = {
    id:string,
    content:string,
    isactive:boolean,
    onEnterkey:(id:string) => void
    onText:(id:string,content:string) => void
    currentRef:any
}



export default function Blocks({id,content,isactive,onEnterkey,onText,currentRef}:Blockprop){

    useEffect(() =>{
        if(isactive){
            currentRef.current?.focus()
        }else return

    },[isactive])

    return (
        <div contentEditable='true' ref={currentRef}
        
      suppressContentEditableWarning
      className="outline-none min-h-6 text-gray-800"
      data-placeholder="Type / for blocks"
        onKeyDown={(e) =>{
            const key = e.key
            if(key === "Enter"){
                e.preventDefault();
                onEnterkey(id)
            }
        }}
        onInput={(e) =>{
            const el = e.currentTarget;
            const text = el.textContent
            onText(id,text)
        }}
        >
        {content}
        </div>
    )
}