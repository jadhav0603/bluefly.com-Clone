import { useLocation } from "react-router-dom"
import Card from "../components/Card"

export default function SearchedDataPage(){
    const location = useLocation()
    const {data} = location.state || {}
    
    console.log("searched Data = ",data)
    return(
        <div className="p-[3vw]">
            <Card response={data} />
           

        </div>
    )
}