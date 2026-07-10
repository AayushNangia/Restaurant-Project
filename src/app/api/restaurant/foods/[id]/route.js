import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { foodSchema } from "@/app/lib/foodsModel";



const connectionStr = process.env.MONGO_URI;

export async function GET(request, content) {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    await mongoose.connect(connectionStr);
    const result = await foodSchema.find({ resto_id: content.params.id });
    return NextResponse.json({ result, success: result.length > 0 });
  } catch (error) {  
    console.log("MONGO_URI:", process.env.MONGO_URI);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
 
export async function DELETE(request, content) {
  try {
    await mongoose.connect(connectionStr);
    const result = await foodSchema.deleteOne({ _id: content.params.id });
    return NextResponse.json({ result, success: result.deletedCount > 0 });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}