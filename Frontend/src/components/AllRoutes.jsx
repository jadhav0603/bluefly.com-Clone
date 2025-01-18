import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import SearchedDataPage from "../pages/SearchedDataPage"
import SelectedProduct from "../pages/SelectedProduct"
import Payment from "../pages/payment"

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/SearchedDataPage' element={<SearchedDataPage />} />
            <Route path='/SelectedProduct' element={<SelectedProduct />}  />    
            <Route path='/Payment' element={<Payment />} />

        </Routes>

)
}

export default AllRoutes