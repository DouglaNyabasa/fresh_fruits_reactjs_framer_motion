import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";
import Menus from "./components/Menus/Menus";
import Navbar from "./components/navbar/Navbar";


const App = () => {
  return <>
   <main className="overflow-x-hidden">
     <Navbar/>
     <Hero/>
     <Menus/>
     <Banner/>
     <Banner2/>
     <Banner3/>
     <Footer/>
   </main>
  </>
  
}
export default App;