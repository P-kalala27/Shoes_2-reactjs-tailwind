/* eslint-disable react/prop-types */
const Sidebar = ({children ,isOpen, onclose}) => {
  return (
   <div>
     <div className={`dark:bg-night-500 overflow-y-auto p-5 fixed top-0 right-0 bg-white h-full w-full
     transition transform duration-300 z-50
      md:w-[50%] lg:w-[35%] shadow-sm
     ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={onclose} className="absolute top-4 right-4 p-2 
        font-bold text-black text-3xl dark:text-white"
        >x
        </button>
        {children}
    </div>
    {isOpen && (<div className="fixed left-0 top-0 bg-black opacity-50 h-full w-full z-20" />)}
   </div>
  )
}

export default Sidebar