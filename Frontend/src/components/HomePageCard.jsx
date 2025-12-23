import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function HomePageCard(props){
    return(
        <div className="cursor-pointer flex flex-col items-center p-[10px]">
        <img loading="lazy" className="lg:h-[22vw] h-[80vw]" src={props.url} alt="Image" />
        <h1 className="text-sm lg:text-4xl font-semibold text-center">{props.heading}</h1>
        <span className="flex items-center text-sm lg:text-lg">
          SHOP NOW <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </span>
      </div>

    )
}