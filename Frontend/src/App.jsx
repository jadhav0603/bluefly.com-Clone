import { useEffect } from 'react';
import AllRoutes from './components/AllRoutes'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'

function App() {
  useEffect(()=>{
    fetch("https://bluefly-com-clone-6ri4.onrender.com/warm-up")
    .then((res) => console.log(res))
    .catch((err) => console.error("Warm-up error:", err));
  },[])

  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />      
    </div>
  )
}

export default App
