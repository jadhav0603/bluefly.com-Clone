import { useLocation } from "react-router-dom"
import Card from "../components/Card"
import FilterPanel from "../components/FilterPanel"

export default function SearchedDataPage(){
    const location = useLocation()
    const {data} = location.state || {}
    
    console.log("searched Data = ",data)
    return(
        <div>
            <h1 className="W-[98vw] text-[3vw] uppercase flex justify-center p-[2vw]">DESIGNER {data[0].category}</h1>
        <div className="flex p-[3vw] gap-10">
            
            <div>
                <Card response={data} />
            </div>
           

        </div>
        </div>
    )
}