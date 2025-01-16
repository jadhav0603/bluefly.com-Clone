import { useLocation } from "react-router-dom"


export default function SearchedDataPage(){
    const location = useLocation()
    const {data} = location.state || {}
    
    console.log("searched Data = ",data)
    return(
        <div>

        </div>
    )
}