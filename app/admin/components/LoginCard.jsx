'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

function LoginCard() {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const router = useRouter()
    const hendelClick=async(e)=>{
        e.preventDefault();
        let data = await fetch("/api/user/login",{
            method:"POST",
            headers:{
              "content-type":"application/json"
            },
            body:JSON.stringify({email,password})
          })
          data=await data.json();
          router.push("/admin")        
    }
  return (
    <>
        <div className="bg-slate-300 p-3 rounded w-6/12 mx-auto">
            <form method='post' className='flex flex-col' onSubmit={hendelClick}>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="mb-3 flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div className="mb-3 flex flex-col">
                    <input type="submit" value="Login" className="bg-teal-500 text-white px-3 py-2 rounded w-full" />
                </div>
            </form>
        </div>
    </>
  )
}

export default LoginCard