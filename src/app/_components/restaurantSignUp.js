import { useState } from "react"
import { useRouter } from "next/navigation"
const RestaurantSignUp =()=>{
    const[email,setEmail] =useState("");
    const[password,setPassword] =useState("");
    const[confirmPassword,setConfirmPassword] =useState("");
    const[name,setName] =useState("");
    const[city,setCity] =useState("");
    const[address,setAddress] =useState("");
    const[phoneNumber,setPhoneNumber] =useState("");
    const router = useRouter();

    const handleSignup = async()=>{
        console.log(email,password,confirmPassword,name,city,address,phoneNumber);
        let response = await fetch("/api/restaurant",{
            method: "POST",
            body: JSON.stringify({email,password,name,city,address,phoneNumber}),
        })
        response = await response.json();
        console.log(response);
        if(response.success){
            alert("Restaurant registered successfully");
        }
        if (response.success){
            console.log(response);
            const { result } = response;
            delete result.password;
            localStorage.setItem("restaurantUser",JSON.stringify(result))
            router.push("/restaurant/dashboard");   
        }
    }
    return(
        <>
       <h3> SignUp </h3>
        <div>
            <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter email id" className="input-feild" 
                value={email} onChange={(event)=> setEmail(event.target.value)} 
                />
            </div>
            <div className = "input-wrapper">
                <input type = "password" placeholder = "Enter password" className="input-feild" 
                 value={password} onChange={(event)=> setPassword(event.target.value)}
                />
            </div>
            <div className = "input-wrapper">
                <input type = "password" placeholder = "Confirm  password" className="input-feild" 
                value={confirmPassword} onChange={(event)=> setConfirmPassword(event.target.value)}
                />
            </div>
            <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter Resturant Name" className="input-feild" 
                value={name} onChange={(event)=> setName(event.target.value)}
                />
            </div>
             <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter Resturant City" className="input-feild" 
                value={city} onChange={(event)=> setCity(event.target.value)}
                />
            </div>

             <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter Full Address" className="input-feild" 
                value={address} onChange={(event)=> setAddress(event.target.value)}
                />
            </div>
             <div className = "input-wrapper">
                <input type = "text" placeholder = "Enter Phone Number" className="input-feild" 
                value={phoneNumber} onChange={(event)=> setPhoneNumber(event.target.value)}
                />
            </div>

            <div className = "input-wrapper">
                <button className="button" onClick ={handleSignup}>SignUp</button>
            </div>
        </div>
        </>
    )
}
export default RestaurantSignUp