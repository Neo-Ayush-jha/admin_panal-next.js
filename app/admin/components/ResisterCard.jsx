'use client'
import { useRouter } from 'next/navigation'
import  { useState } from 'react'

function ResisterCard() {
  const router= useRouter();
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const handeResister = async (e)=>{
    e.preventDefault();
    let data = await fetch("/api/user",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({name,email,password})
    })
    data=await data.json();
    router.push("/")
  }
  return (
    <>
      <div className="w-6/12 mx-auto">
      <form action="" onSubmit={handeResister}>
          <div className="flex flex-col mb-3">
            <label htmlFor="Name">Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} id='name' className="border w-full px-3 py-2" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="Email">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='email' className="border w-full px-3 py-2" />
          </div>
          <div className="flex flex-col mb-3">
            <label htmlFor="text">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='password' className="border w-full px-3 py-2" />
          </div>
          <div className="flex">
            <input type="submit" value="Submit" className="bg-teal-500 text-white px-3 py-2 rounded w-full" />
          </div>
        </form>
      </div>
    </>
  )
}

export default ResisterCard