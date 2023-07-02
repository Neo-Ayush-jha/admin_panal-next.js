
import Connect from "@/app/db/Connect";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";
import User from "@/app/model/User"
Connect()

export async function POST(req){
    let {name,email,password}=await req.json();
    const hashedPassword=await bcrypt.hash(password,8)
    let userData = new User({name,email,password:hashedPassword})
    try{
        await userData.save();
        return NextResponse.json({userData,"msg":"User register"})
    }catch(e){
        throw NextResponse.json({"msg":"Some thing is wrong..."})
    }
}