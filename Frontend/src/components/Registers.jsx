import { useState } from "react"
import axios from "axios"

export default function Registers() {

    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");



    const [isFirstFocus, setIsFirstFocus] = useState(false)
    const [isLastFocus, setIsLastFocus] = useState(false)
    const [isEmailFocus, setIsEmailFocus] = useState(false)
    const [isPasswordFocus, setIsPasswordFocus] = useState(false)

    const handleRegister = async()=>{
        try {
            const response = await axios.post('https://bluefly-com-clone-6ri4.onrender.com/register',
                {firstName,lastName,email,password})
            console.log(response)
        } catch (error) {
            console.log("register error : ", error.message)
        }
    }

  
    return (
        <div className="w-[93vw] flex flex-col items-center justify-center border py-[2vw] m-[auto]">
            <h1 className="text-[2.5vw] font-semibold p-[2vw]">CREATE ACCOUNT</h1>
            <form onSubmit={handleRegister()}>
                <div className="flex flex-col">
                <div className="flex flex-col my-[10px]">
                        <label className={`relative w-fit ${isFirstFocus ? "top-0 text-[0.9vw] transition-all duration-500" : "top-6 transition-all duration-500"}`}> FIRST NAME </label>
                        <input className="focus:outline-none border-b border-black w-[35vw] "
                            onFocus={() => setIsFirstFocus(true)}
                            onBlur={(e) => !e.target.value && setIsFirstFocus(false)}
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            type="text" 
                            required/>
                    </div>
                    <div className="flex flex-col my-[10px]">
                    <label className={`relative w-fit ${isLastFocus ? "top-0 text-[0.9vw] transition-all duration-500" : "top-6 transition-all duration-500"}`} >LAST NAME</label>
                    <input className="focus:outline-none border-b border-black w-[35vw] "
                        onFocus={() => setIsLastFocus(true)}
                        onBlur={(e) => !e.target.value && setIsLastFocus(false)} 
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        type="text"
                        required
                    />
                    </div>
                    <div className="flex flex-col my-[10px]">
                        <label className={`relative w-fit ${isEmailFocus ? "top-0 text-[0.9vw] transition-all duration-500" : "top-6 transition-all duration-500"}`}> EMAIL </label>
                        <input className="focus:outline-none border-b border-black w-[35vw] "
                            onFocus={() => setIsEmailFocus(true)}
                            onBlur={(e) => !e.target.value && setIsEmailFocus(false)}
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
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
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        required
                    />
                    </div>
                </div>

                <div className="my-[3vw] text-[0.9vw] flex justify-center">

                <input className="bg-black text-white py-[6px] px-[15px] rounded-[40%]" type="submit" value="CREATE" />
                </div>
            </form>
        </div>
    )
}