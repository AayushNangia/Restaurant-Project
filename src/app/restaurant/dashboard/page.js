'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RestaurantHeader from "@/app/_components/RestaurantHeader";

import './../style.css'

const Dashboard =() =>{
    const [ready, setReady] = useState(false);
    const router = useRouter();

    useEffect(()=>{
        if(!localStorage.getItem("restaurantUser")){
            router.push("/restaurant");
        }else{
            setReady(true);
        }
    }, [router])

    if(!ready) return null;

    return(
        <div>
            <RestaurantHeader />
            <h1>Welcome to dashboard</h1>
        </div>
    )
}
export default Dashboard;
