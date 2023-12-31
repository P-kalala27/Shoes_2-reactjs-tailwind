import { useState } from "react"
import { Nav } from "./components"
import { NewArrivalsSection } from "./components/NewArrivalsSection"
import ShoeDetail from "./components/ShoeDetail"
import Sidebar from "./components/Sidebar"
import { SHOE_LIST } from "./constante"
const App = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <section className=" animate-fadeIn p-10 xl:px-24 an">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)}/> 
      <ShoeDetail/> 
      
      <NewArrivalsSection items={SHOE_LIST} />
      <Sidebar isOpen={isSidebarOpen} onclose={() => setIsSidebarOpen(false) }>
        <h2 className="mb-10 font-bold text-2xl">Cart </h2>
      </Sidebar>
    </section>
  )
}

export default App