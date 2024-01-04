/* eslint-disable react/prop-types */

import { IoIosArrowDown } from "react-icons/io";

const Select = ({title, options, className, value, onChange}) => {
  return (
    <div className='relative dark:text-black cursor-pointer' >
    <select value={value || ""} onChange={(e) => onChange(e.target.value)} 
    className={`w-24 appearance-none
    border border-gray-300 p-4 bg-white ${className}`}>
        <option value="" disabled hidden >{title}</option>
        {
            options.map((option) => (
                <option key={option}>{option}</option>
            ))
        }
    </select>
    <div className='absolute  right-0 inset-y-0 flex-center pr-2'>
        <IoIosArrowDown />
    </div>
    </div>
  )
}

export default Select