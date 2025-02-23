import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailFocus, setIsEmailFocus] = useState(false)
    const [isPasswordFocus, setIsPasswordFocus] = useState(false)

    const handleRegister = () => {
        navigate('/Registers')
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://bluefly-com-clone-6ri4.onrender.com/login/',
                { email, password })
            console.log(response.data)
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    return (
        <div className="w-[93vw] flex flex-col items-center justify-center border py-[2vw] m-[auto]">
            <h1 className="text-[2.5vw] font-semibold p-[2vw]">LOG IN</h1>
            <form onSubmit={handleLogin}>
                <div className="flex flex-col">
                    <div className="flex flex-col my-[10px]">
                        <label className={`relative w-fit ${isEmailFocus ? "top-0 text-[0.9vw] transition-all duration-500" : "top-6 transition-all duration-500"}`}> EMAIL </label>
                        <input className="focus:outline-none border-b border-black w-[35vw] "
                            onFocus={() => setIsEmailFocus(true)}
                            onBlur={(e) => !e.target.value && setIsEmailFocus(false)}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col my-[10px]">
                        <label className={`relative w-fit ${isPasswordFocus ? "top-0 text-[0.9vw] transition-all duration-500" : "top-6 transition-all duration-500"}`} >PASSWORD</label>
                        <input className="focus:outline-none border-b border-black w-[35vw] "
                            onFocus={() => setIsPasswordFocus(true)}
                            onBlur={(e) => !e.target.value && setIsPasswordFocus(false)}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            required
                        />
                    </div>
                </div>

                <div className="my-[3vw] gap-[2vw] text-[0.9vw] flex flex-col items-center justify-center">
                    <p className="w-fit" >FORGOT YOUR PASSWORD</p>
                    <button className="bg-black text-white py-[6px] px-[15px] rounded-[40%]" type="submit"> SIGN IN </button>
                    <p onClick={() => handleRegister()}> CREATE ACCOUNT </p>
                </div>
            </form>
        </div>
    )
}