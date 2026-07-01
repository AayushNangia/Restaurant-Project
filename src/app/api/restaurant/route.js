import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { Restaurant } from "@/app/lib/restaurantsModel";
 
export async function GET() {
    try {
        console.log("🔵 API Hit - GET /api/restaurant");
        console.log("🔵 Connection String:", connectionStr);
        console.log("🔵 Mongoose State:", mongoose.connection.readyState);
 
        await mongoose.connect(connectionStr, { dbName: "restoDB" }); // 👈 add this
        console.log("✅ MongoDB Connected Successfully");
 
        const data = await Restaurant.find();
        console.log("✅ Data Fetched - Total Records:", data.length);
        console.log("✅ Data:", JSON.stringify(data));
 
        return NextResponse.json({ result: data });
 
    } catch (error) {
        console.error("❌ Error Name:", error.name);
        console.error("❌ Error Message:", error.message);
        console.error("❌ Full Error:", error);
 
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}