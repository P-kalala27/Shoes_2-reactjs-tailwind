/* eslint-disable react/prop-types */
import { useState } from "react"
import { QTY, SIZES } from "../constante"
import Select from "./Select"
const ShoeDetail = ({shoe, onClick}) => {
  const [form, setForm] = useState({qty:null , size:null})
  return (
    <div className="flex flex-col lg:flex-row-reverse dark:text-white">
        <div className="flex-1 lg:-mt-32 lg:ml-28">
          {/* shoe image */}
           <div className="flex-center h-full from- bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
           <img src={shoe.src} alt="nike shoe 1"
           className=" animate-float"
           />
           </div>
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
            <div>
            <h1 className="text-5xl font-bold md:text-9xl"
            >{shoe.title}
            </h1>
            </div>
            <div className="mt-6 mb-8">
            <p className="font-Open md:text-xl  text-gray-600 dark:text-white">
            {shoe.description}
            </p>
            </div>
            <div className="flex space-x-6 mt-4 mb-6">
            <p className="text-xl  font-Open md:text-6xl">{shoe.price} $</p>
            <Select value={form.qty} onChange={(qty) => setForm({...form, qty})} title={"QTY"} options={QTY}/>
            <Select value={form.size} onChange={(size) => setForm({...form, size})} title={"SIZE"} options={SIZES}/>
            </div>

           <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:space-x-10 ">
           <button className="h-14 w-44 bg-black text-white
            hover:bg-gray-900 active:bg-gray-900 btn-press dark:bg-gray-100 dark:hover:bg-gray-300 dark:text-night-500
            " onClick={()=> onClick(shoe, form.qty, form.size)}>Add to card</button>
            <a href="/" className="text-lg font-bold font-Open underline
             underline-offset-4 pb-6 lg:pb-0">
              View details
              </a>
           </div>
        </div>
    </div>
  )
}

export default ShoeDetail