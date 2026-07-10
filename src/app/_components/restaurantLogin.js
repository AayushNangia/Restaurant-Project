import { useState } from "react"
import { useRouter } from "next/navigation"

const RestaurantLogin =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [error, setError] = useState("false");

    const handleLogin = async()=>{
        if(!email || !password){
            setError(true)
            return false
        } else{
            setError(false);
        }

        console.log(email,password);
        let response = await fetch("/api/restaurant/login",{
            method: "POST",
            body: JSON.stringify({ email, password ,login:true }),
        })
        response = await response.json();
        if(response.success){
            const { result } = response;
            delete result.password;
            localStorage.setItem("restaurantUser", JSON.stringify(result))
            router.push("/restaurant/dashboard");
        }else{
            alert("Invalid email or password");
        }
    }

    return(
        <>
        <h3>Login Component</h3>
        <div>
            <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter email id" className="input-feild"
                value={email} onChange={(event)=> setEmail(event.target.value)}
                
                />
                {error && !email ? <span className="input-error">Please enter valid email</span> : null}



            </div>
            <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter password" className="input-feild"
                value={password} onChange={(event)=> setPassword(event.target.value)}/>
                {error && !password ? <span className="input-error">Please enter valid password</span> : null}
                
            </div>
            <div className = "input-wrapper">
                <button onClick={handleLogin} className="button">LogIn</button>
            </div>
        </div>
        </>
    )
}
export default RestaurantLogin;
