import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import SearchedDataPage from "../pages/SearchedDataPage"
import SelectedProduct from "../pages/SelectedProduct"
import Payment from "../pages/payment"
import LoginModel from "./LoginModel"
import Login from './Login'
import Registers from "./Registers"
import FavouritePage from "../pages/FavouritePage"
import AddCarts from "../pages/AddCarts"


function AllRoutes(){
    return(
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

)
}

export default AllRoutes