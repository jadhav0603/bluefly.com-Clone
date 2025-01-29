import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


export default function IsLogedIn() {

    return (
        <div>
            <div>
                <h1>ACCOUNT</h1>
                <div>
                    <p>LOGOUT </p>
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