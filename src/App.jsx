import Card from "./components/Card"
import { Shoes } from "./constante"

const App = () => {
  return (
    <section className=" animate-fadeIn p-10 xl:px-24 an">
      {/* <Nav />
      <ShoeDetail /> */}
      <Card item={Shoes[0]} />
    </section>
  )
}

export default App