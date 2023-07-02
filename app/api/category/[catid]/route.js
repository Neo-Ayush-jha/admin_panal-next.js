import Connect from "@/app/db/Connect"
import Category from "@/app/model/Category";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    await Connect();
    let data, code = 200;
    let { catid } = params;
    try {
        data = await Category.findById(catid);
    } catch (e) {
        data = "Some thing is wrong so book data in not get.";
        code = 201;
    }
    return NextResponse.json({ data }, { status: code })
}

export const PUT = async (req, { params }) => {
    await Connect();
    let data, updatedData, code = 200;
    data = await req.json();
    let { catid } = params;
    try {
        updatedData = await Category.findByIdAndUpdate(catid, data);
    } catch (e) {
        updatedData = "Some thing is wrong so book data in not updated.";
        code = 201;
    }
    return NextResponse.json({ updatedData }, { status: code })
}

export const DELETE = async (req, { params }) => {
    await Connect();
    let deleteData, code = 200;
    let { catid } = params;
    try {
        deleteData = await Category.findByIdAndDelete(catid);
    } catch (e) {
        data = "Some thing is wrong so book data in not delete."
    }
    return NextResponse.json({ deleteData }, { status: code })
}