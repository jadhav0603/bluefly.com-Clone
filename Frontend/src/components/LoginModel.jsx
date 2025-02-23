import LogedIn from "./LogedIn"
import Login from "./Login"


export default function LoginModel(){
    const token = localStorage.getItem('token');
    return(
        <div>
            {
                token ? <LogedIn /> : <Login />
            }
        </div>
    )
}