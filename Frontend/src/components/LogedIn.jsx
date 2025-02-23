import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function LogedIn() {

    const Navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem("token");
        console.log(localStorage)
        Navigate('/Login');
        
    };

    return (
        <div>
            <div>
                <h1>ACCOUNT</h1>
                <div>
                    <p onClick={()=>handleLogout()}>LOGOUT </p>
                    <FontAwesomeIcon
                        className="relative right-7 text-[1.5vw]"
                        icon={faArrowRight}
                    />
                </div>
            </div>

            <div>
                <div>
                    <h1>ORDER HISTORY</h1>
                </div>

                <div>
                    <h1>ACCOUNT DETAILS</h1>
                    <p> NAME </p>
                    <p> STATE </p>
                </div>
            </div>

        </div>
    )
}