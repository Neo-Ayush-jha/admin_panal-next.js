import Connect from "@/app/db/Connect"
import Book from "@/app/model/Book";
import { NextResponse } from "next/server";


export const GET = async (req, { params }) => {
    await Connect();
    let data, code = 200;
    let { bookid } = params;
    try {
        data = await Book.findById(bookid);
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
    let { bookid } = params;
    try {
        updatedData = await Book.findByIdAndUpdate(bookid, data);
    } catch (e) {
        updatedData = "Some thing is wrong so book data in not updated.";
        code = 201;
    }
    return NextResponse.json({ updatedData }, { status: code })
}

export const DELETE = async (req, { params }) => {
    await Connect();
    let deleteData, code = 200;
    let { bookid } = params;
    try {
        deleteData = await Book.findByIdAndDelete(bookid);
    } catch (e) {
        data = "Some thing is wrong so book data in not delete."
    }
    return NextResponse.json({ deleteData }, { status: code })
}