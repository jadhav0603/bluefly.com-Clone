import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import SearchedDataPage from "../pages/SearchedDataPage"
import SelectedProduct from "../pages/SelectedProduct"
import Payment from "../pages/payment"
import Login from "./Login"
import Registers from "./Registers"

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/SearchedDataPage' element={<SearchedDataPage />} />
            <Route path='/SelectedProduct' element={<SelectedProduct />}  />    
            <Route path='/Payment' element={<Payment />} />
            <Route path='/Login' element={<Login/>} />
            <Route path="/Registers" element={<Registers/>} />
        </Routes>

)
}

export default AllRoutes