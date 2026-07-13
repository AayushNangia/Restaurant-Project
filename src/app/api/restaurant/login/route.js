import { connectionStr } from "@/app/lib/db";
import { Restaurant } from "@/app/lib/restaurantsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, password } = await request.json();

    console.log("[login] connectionStr is:", connectionStr ? "defined" : "UNDEFINED");
    console.log("[login] mongoose.readyState:", mongoose.connection.readyState);

    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(connectionStr, { dbName: "restoDB" });
        console.log("[login] connected to MongoDB");
    }
    const result = await Restaurant.findOne({ email, password });

    if (result) {
        return NextResponse.json({ result, success: true });
    }
    return NextResponse.json({ success: false });
}
