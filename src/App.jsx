import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { Nav } from "./components";
import Cart from "./components/Cart";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import ShoeDetail from "./components/ShoeDetail";
import Sidebar from "./components/Sidebar";
import { SHOE_LIST } from "./constante";


const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setcurrentShoe] = useState(SHOE_LIST[0]);

  const [CartItems, setCartItems] = useState([]);

  useEffect(()=>{
    const isDarkMode = localStorage.getItem("isDarkMode")
    if(isDarkMode === "true")  window.document.documentElement.classList.add("dark");
  }, [])
  const toggleDark = ()=>{
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", 
    window.document.documentElement.classList.contains("dark")
    );
  }

  const removeItems = (productId) =>{
    const updateItems = [...CartItems];
    const existingItems = CartItems.findIndex((item) => {
      item.product.id === productId
    });
    updateItems.splice(existingItems, 1);
    setCartItems(updateItems)
  }

  const handleAddToCard = (product, qty, size) =>{
    const updatedCartItems = [...CartItems]
    if(qty && size){
      const existingIndex = CartItems.findIndex( item => item.product.id === product.id)
      if(existingIndex > -1){
        updatedCartItems[existingIndex].qty = qty
        updatedCartItems[existingIndex].size = size
      } else {
        updatedCartItems.push({product, qty, size})
      }
    }
    setCartItems(updatedCartItems);
  }

  return (
    <section className=" animate-fadeIn p-10 xl:px-24 dark:bg-night-500">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)}/> 
      <ShoeDetail shoe={currentShoe} onClick={handleAddToCard}/> 
      
      <NewArrivalsSection items={SHOE_LIST} onSelecteCard={setcurrentShoe} />
      <Sidebar isOpen={isSidebarOpen} onclose={() => setIsSidebarOpen(false) }>
        <Cart cartItems={CartItems} onClickTrash={removeItems}/>
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