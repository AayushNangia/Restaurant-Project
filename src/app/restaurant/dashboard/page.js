'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import FooditemList from "@/app/_components/FooditemList";

import './../style.css'
import AddFoodItems from "@/app/_components/AddFooditem";

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
    const [addFoodItem, setAddItem] = useState(false);
    if(!ready) return null;
   
    return(
        <div>
            <RestaurantHeader />
            <button onClick={()=>setAddItem(true)}>Add Food </button>
            <button onClick={()=>setAddItem(false)}> Dashboard</button>
            {
                addFoodItem ? <AddFoodItems/> : <FooditemList/>
            }


        </div>
    )
}
export default Dashboard;
