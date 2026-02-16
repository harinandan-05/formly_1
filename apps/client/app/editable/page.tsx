// "use client";
// import { useRef, useState } from "react";
// import Blocks from "@/Logics/Blocks";


// interface Blocks {
//   id:string,
//   text:string
// }

// export default function EditableUi() {
//   const Blockref = useRef<HTMLHeadingElement | null>(null);
//   const [block,setBlock] = useState<Blocks[]>([
//     {id:crypto.randomUUID() , text:''}
//   ])

//   console.log(block,"block now")

//   const [active,setactive] = useState(false)

//   function handleEnter(currentId:string){
//     const currentIndex = block.findIndex(b =>b.id === currentId)
//     const newBlock = {
//       id:crypto.randomUUID(),
//       text:''
//     }

//     const updatedBlock = [...block]
//     updatedBlock.splice(currentIndex + 1,0,newBlock)
//     setBlock(updatedBlock)
//     setactive(true)
//     return updatedBlock;
//   }

//   function textChange(currentId:string,content:string){
//     setBlock(prev =>
//       prev.map(b => 
//         b.id === currentId ? {...b,text:content}:b
//       )
//     )
//   }



//   return (
//     <div id="editor" className="bg-white w-full min-h-screen flex flex-col">
//       {/* Title card */}
//       <h1
//         contentEditable="true"
//         data-placeholder="Form Title"
//         className="mt-40 ml-100 
//             text-4xl text-gray-800
//             font-extrabold outline-0 max-w-150
//             empty:before:content-[attr(data-placeholder)]
//             empty:before:text-gray-300"
//         onKeyDown={(event) => {
//           if (event.key === "Enter") {
//             event.preventDefault();
//             Blockref.current?.focus();
//           }
//         }}
//       ></h1>
//       <div>
//         <Blocks onEnterkey={handleEnter} onText={textChange} isactive={active} currentRef={Blockref}/>
//       </div>
//     </div>
//   );
// }