import { useEffect } from 'react';
import AllRoutes from './components/AllRoutes'
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import FavouriteButton from './components/FavouriteButton';
import { CountContextProvider } from './components/UseContextHook';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';
import axios from 'axios';



function App() {
  useEffect(()=>{
    const connectDB = ()=>{
      const toastId = toast.loading("Wait For Connecting Database Server")

      try{
        const res = axios.get("https://bluefly-com-clone-6ri4.onrender.com/warm-up")
        console.log("connected DB :", res.data)

        toast.update(toastId,{
          render: "Server Connected to Database Successfully",
        type: "success",
        isLoading: false,
        autoClose: 2000,
        })

      }
      catch(error){
        console.log(error)
        toast.update(toastId, {
        render: "Server Connection Failed ❌",
        type: "error",
        isLoading: false,
        autoClose: 2000,
      });
      }
    }

    connectDB()
  },[])

  return (
    <CountContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
      <Navbar />
      <FavouriteButton />
      <AllRoutes />
      <Footer />      
    </CountContextProvider>
  )
}

export default App
