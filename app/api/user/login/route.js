import User from "@/app/model/User"
import Connect from "@/app/db/Connect"
import { NextResponse } from "next/server";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import bcrypt from "bcryptjs"
import { cookies } from "next/dist/client/components/headers";
Connect()

export async function POST(req) {
    const { email, password } = await req.json()
    const user = await User.findOne({ email: email })
    if (user) {
        const isPassword = await bcrypt.compare(password, user.password)
        if (isPassword) {
            const token = sign({ _id: user._id }, "YesAyushisHereanishAndsmritiAndnikTo")
            const serialized = serialize("cookie_name", token, { httpOnly: true, maxAge: 1 })
            let respone = NextResponse.next()
            respone.cookies.set(serialized)
            return new NextResponse(JSON.stringify({ user, msg: "Login Successfull.." }), {
                headers: { "Set-Cookie": serialized }
            })
        } else {
            return NextResponse.json({ msg: "This email and password is not match..." })
        }
    } else {
        return NextResponse.json({ msg: "Id is not found...." })
    }
}
       