import { useEffect } from 'react';
import AllRoutes from './components/AllRoutes'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import FavouriteButton from './components/FavouriteButton';
import { CountContextProvider } from './components/UseContextHook';


function App() {
  useEffect(()=>{
    fetch("https://bluefly-com-clone-6ri4.onrender.com/warm-up")
    .then((res) => console.log(res))
    .catch((err) => console.error("Warm-up error:", err));
  },[])

  return (
    <CountContextProvider>
      <Navbar />
      <FavouriteButton />
      <AllRoutes />
      <Footer />      
    </CountContextProvider>
  )
}

export default App
