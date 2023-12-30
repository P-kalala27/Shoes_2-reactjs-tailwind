import nike1 from "../assets/n1-min.png"
import { QTY, SIZES } from "../constante"
import Select from "./Select"
const ShoeDetail = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse ">
        <div className="flex-1 lg:-mt-32 lg:ml-28">
          {/* shoe image */}
           <div className="flex-center h-full from- bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
           <img src={nike1} alt="nike shoe 1"
           className=" animate-float"
           />
           </div>
        </div>
        <div className="flex-1 mt-6 lg:mt-0">
            <div>
            <h1 className="text-5xl font-bold md:text-9xl"
            >Nike Aire max 270
            </h1>
            </div>
            <div className="mt-6 mb-8">
            <p className="font-Open md:text-xl  text-gray-600">
            The Nike Air Max 270 is a lifestyle shoe that's sure 
            to turn heads with its vibrant color gradient.
            </p>
            </div>
            <div className="flex space-x-6 mt-4 mb-6">
            <p className="text-xl  font-Open md:text-6xl">$100</p>
            <Select title={"QTY"} options={QTY}/>
            <Select title={"SIZE"} options={SIZES}/>
            </div>

           <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:space-x-10 ">
           <button className="h-14 w-44 bg-black text-white
            hover:bg-gray-900 active:bg-gray-900 btn-press
            ">Add to card</button>
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