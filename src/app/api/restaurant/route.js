import { connectionStr } from "@/app/lib/db";
import { Restaurant } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import data from "@/app/lib/data.json";
// export async function GET() {
//     await mongoose.connect(connectionStr, { dbName: "restoDB" });

//     const data = await Restaurant.find();
//     console.log(data);

//     return NextResponse.json({ result: data });
// }

export async function GET() {
    return NextResponse.json({ result: data });
}


export async function POST(request){
    let payload= await request.json();
    let result = undefined;
    let success = false;


    await mongoose.connect(connectionStr, { dbName: "restoDB" });

    if(payload.login){
       result = await Restaurant.findOne({ email: payload.email, password: payload.password });
       if(result){
        success = true;
       }
    } else{
         const restaurant = new Restaurant(payload);

     result = await restaurant.save();
     if(result){
        success = true;
     }
    }

   
   
    return NextResponse.json({ result, success });
 }