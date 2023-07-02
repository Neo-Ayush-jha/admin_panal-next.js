import { NextResponse } from "next/server";
import Connect from "@/app/db/Connect.js";
import Category from "@/app/model/Category.js";
 

export const GET = async () => {
    await Connect();
    let data, code = 200;
    try {
        data = await Category.find({});
    } catch (e) {
        data = "Some thing is wrong so books data in not get."
        code = 201
    }
    return NextResponse.json({ data }, { status: code })
}

export const POST = async (req) => {
    await Connect();
    let data, newRecord, code = 200;
    data = await req.json();
    newRecord = new Category(data)
    try {
        await newRecord.save();
    } catch (e) {
        newRecord = "Some thing is wrong so the book data in not insert."
        code = 201
    }
    return NextResponse.json({ newRecord }, { status: code })
}