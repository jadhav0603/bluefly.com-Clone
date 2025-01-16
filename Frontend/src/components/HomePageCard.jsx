import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function HomePageCard(props){
    return(
        <div className="w-[21vw] h-fit flex flex-col  items-center">
        <img className="h-[22vw]" src={props.url} alt="Image" />
        <h1 className="text-[3vw] font-semibold text-center">{props.heading}</h1>
        <span className="mt-4 flex items-center text-[1vw]">
          SHOP NOW <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </span>
      </div>

    )
}