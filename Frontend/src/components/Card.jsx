import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// Now you can use faHeartRegular as the classic heart icon

export default function Card({response}){
    return(
        <div className="flex flex-wrap gap-10">
            { response && response.map((ele,i)=>(
                <div className="w-[14vw] m-[1vw]border" key={i}>
                    <div className="relative group">
                        <img className=" w-[12vw] h-fit" src={ele.image1} />
                        <img className="absolute w-[12vw] h-fit top-0 left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible" src={ele.image2} />
                    </div>
                    <FontAwesomeIcon className="text-[1.5vw] relative left-[11vw] bottom-[1vw]" icon={faHeart} />
                    <h1 className="text-[1.5vw]">{ele.productName}</h1>
                    <span className="line-through opacity-70">${ele.orignalPrice}</span>
                    <span className="text-[1.5vw] p-[5px]" >${ele.sellingPrice}</span>
                    <p> 1 COLOR AVAILABLE</p>
                </div>
            )) }
        </div>
    )
}
