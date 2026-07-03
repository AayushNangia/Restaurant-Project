 'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';


const  RestaurantHeader =()=>{
    const [details,setDetails] = useState();
    const router= useRouter();

    useEffect(()=>{
        let data = localStorage.getItem("restaurantUser");
        if(!data){
            router.push("/restaurant");
        }else{
            setDetails(JSON.parse(data));
        }
    }, [router])

    const handleLogout = ()=>{
        localStorage.removeItem("restaurantUser");
        setDetails(undefined);
        router.push("/restaurant");
    }
    return(
        <div className='header-wrapper'>
            <div className="logo">
                <img style={{width:100}} src = "https://static.vecteezy.com/system/resources/previews/035/726/286/original/food-delivery-logo-design-free-vector.jpg"/>

            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>

                </li>
            {
                details && details.name?
                <>
                <li><button onClick={handleLogout}>logout</button></li>
                <li><Link href ="/"> profile</Link></li></>
                : <li><Link href="/">login/signup</Link></li>
            }


               
            </ul>
        </div>
    )
}
export default RestaurantHeader;