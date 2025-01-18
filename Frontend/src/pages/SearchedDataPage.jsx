import { useLocation } from "react-router-dom"
import Card from "../components/Card"
import FilterPanel from "../components/FilterPanel"

export default function SearchedDataPage(){
    const location = useLocation()
    const {data} = location.state || {}
    
    console.log("searched Data = ",data)
    return(
        <div className="flex p-[3vw] gap-10">
            <div>
                <FilterPanel response={data} />
            </div>
            <div>
                <Card response={data} />
            </div>
           

        </div>
    )
}