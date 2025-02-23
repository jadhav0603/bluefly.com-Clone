import { createContext, useState } from "react";


export const CountContext = createContext()


export const CountContextProvider = ({children}) =>{
    
    const [count,setCount] = useState(0)
    const [isLogin, setIsLogin] = useState(false)

    return(
        <CountContext.Provider value={{count,setCount,isLogin,setIsLogin}} >
            {children}
        </CountContext.Provider>
    )
}