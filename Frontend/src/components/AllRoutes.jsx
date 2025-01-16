import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home"
import SearchedDataPage from "../pages/SearchedDataPage"



function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/SearchedDataPage' element={<SearchedDataPage />} />
        </Routes>
    )
}

export default AllRoutes