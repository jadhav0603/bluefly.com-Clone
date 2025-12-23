import {Routes, Route} from "react-router-dom"
import { lazy,Suspense } from "react"
import Home from "../pages/Home"
const SearchedDataPage = lazy(()=> import('../pages/SearchedDataPage')) 
// import SearchedDataPage from "../pages/SearchedDataPage"
const SelectedProduct = lazy(()=> import('../pages/SelectedProduct'))
// import SelectedProduct from "../pages/SelectedProduct"
import Payment from "../pages/payment"
import LoginModel from "./LoginModel"
import Login from './Login'
import Registers from "./Registers"
const FavouritePage = lazy(()=> import('../pages/FavouritePage'))
// import FavouritePage from "../pages/FavouritePage"
import AddCarts from "../pages/AddCarts"


function AllRoutes(){
    return(
        <Suspense fallback={<p className="text-lg font-semibold animate-pluse">L O A D I N G . . .</p>} >
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/SearchedDataPage' element={<SearchedDataPage />} />
            <Route path='/SelectedProduct' element={<SelectedProduct />}  />    
            <Route path='/Payment' element={<Payment />} />
            <Route path='/LoginModel' element={<LoginModel />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registers" element={<Registers />} />
            <Route path="/FavouritePage" element={<FavouritePage />} />
            <Route path="/AddCarts" element= {<AddCarts />} />
        </Routes>
        </Suspense>
)
}

export default AllRoutes