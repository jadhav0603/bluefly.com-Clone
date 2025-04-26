import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LogedIn() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        async function fetchUserData() {
            const token = localStorage.getItem("token");

            if (!token) {
                console.log("No token found, redirecting to login");
                navigate("/Login");
                return;
            }

            try {
                const res = await axios.get("https://bluefly-com-clone-6ri4.onrender.com/login/logedIn", {
                    headers: {
                        Authorization: `Bearer ${token}` // ✅ Include token in request
                    }
                });

                console.log("User data:", res.data);
                setUserData(res.data.user);

            } catch (error) {
                console.error("Error fetching user data:", error.response?.data || error.message);
                navigate("/Login"); // Redirect to login if unauthorized
            }
        }

        fetchUserData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/Login');
    };

    return (
        <div className="border w-[93vw] m-auto">
            <div className="flex justify-between px-12 py-5">
                <h1 className="text-[2.5vw]">ACCOUNT</h1>
                <div className="flex w-32 justify-between ">
                    <div>
                        <p onClick={handleLogout}>LOGOUT </p>
                    </div>

                    <div>
                        <FontAwesomeIcon
                            className="relative right-7 text-[1.5vw]"
                            icon={faArrowRight}
                            onClick={handleLogout}
                        />
                    </div>
                </div>
            </div>

            <div className="px-12 flex justify-between">
                <div className="text-[2vw]">
                    <h1>ORDER HISTORY</h1>
                </div>

                <div className="border border-black w-[25vw] py-8">
                    <h1 className="text-[2vw] flex justify-center px-5 py-2">ACCOUNT DETAILS</h1>
                    {userData ? (
                        <>
                            <p className="flex justify-center">{userData.firstName} {userData.lastName}</p>
                            <p className="flex justify-center">{userData.email}</p>
                        </>
                    ) : (
                        <p className="flex justify-center">Loading user details...</p>
                    )}
                    <p className="flex justify-center py-5">View addresses (1)</p>
                </div>
            </div>
        </div>
    );
}
