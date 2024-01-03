import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Nav } from "./components";
import Cart from "./components/Cart";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constante";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product:shoe,
    qty:1,
    size:40
  }
})
const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if(isDarkMode === "true"){
      window.document.documentElement.classList.add("dark")
    }
  }, [])
  const toggleDark = ()=>{
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", 
    window.document.documentElement.classList.contains
    );
  }

  return (
    <section className=" animate-fadeIn p-10 xl:px-24 dark:bg-night-500">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)}/> 
      <ShoeDetail/> 
      
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar isOpen={isSidebarOpen} onclose={() => setIsSidebarOpen(false) }>
        <Cart cartItems={FAKE_CART_ITEMS} />
      </Sidebar>
      <div className="fixed  bottom-4 right-4">
        <button onClick={toggleDark} className="bg-night-50 rounded-full text-white px-4 py-2 dark:bg-white dark:text-night-500 shadow-lg">
          <BiSun className="hidden dark:block "/>
          <BiMoon className="dark:hidden"/>
        </button>
      </div>
    </section>
  )
}

export default App