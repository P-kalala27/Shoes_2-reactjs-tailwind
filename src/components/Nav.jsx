/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerLogo } from "../assets";

const MENU = ["Home", "About", "Service", "Pricing", "Contact"]

const Nav = ({onClickShoppingBtn}) => {
    // state for mobile
    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=" relative z-10 flex flex-wrap justify-between items-center">
        {/* logo */}
        <a href="/"> <img src={headerLogo} alt="logo"
        width={80}
        height={80}
        className="dark:fill-white"
        />
        </a>
        {/* burger button for mobile */}
        <button onClick={()=>setIsOpen(!isOpen)} className="dark:text-gray-400 dark:hover:bg-gray-700 p-2 focus:ring-2 focus:ring-gray-200
         rounded-lg hover:bg-gray-100 lg:hidden">
        <RxHamburgerMenu size={25} className="dark:fill-white"/>
        </button>
            {/* toggle the menu */}
        <div className={`${!isOpen && "hidden"} 
        w-full lg:block lg:w-auto`}>
            <ul className=" lg:space-x-6 flex flex-col bg-gray-50  border border-gray-50
              text-center rounded-lg p-4 text-lg lg:flex-row
              lg:bg-transparent lg:border-none lg:dark:text-white">
                {
                    MENU.map((item) =>(
                        <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-sm dark:hover:text-gray-950" key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
        {/* card icon  */}
        <div onClick={onClickShoppingBtn} className=" btn-press fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="flex-center h-12 w-12 bg-white shadow-sm rounded-full cursor-pointer">
         <FiShoppingCart />
        </div>
        </div>
    </nav>
  )
}

export default Nav