"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

function Admin_Category_Calling({ allCategory }) {
    const router = useRouter()
    const handelDelete = async(id)=>{
        let data=await fetch(`/api/category/${id}`,{
            method : "DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        data=await data.json();
        router.push("/admin/category/mange")
    }
    return (
        <div className="border">
            <table className="border">
                <thead>
                    <tr>
                        <th className="border p-2 hidden md:inline-flex ">Id</th>
                        <th className="border p-2">category title</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allCategory.map((value, key) => (
                            <tr key={key}>
                                <td className="border p-2 hidden md:inline-flex">{value._id}</td>
                                <td className="border p-2">{value.cat_title}</td>
                                <td className="border p-2 gap-2 flex">
                                <button className="bg-red-600 text-white px-3 py-2 rounded" onClick={()=>handelDelete(value._id)}>Delete</button>
                                <Link href={`/admin/category/update/${value._id}`} className="bg-sky-600 text-white px-3 py-2 rounded" >Edit</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin_Category_Calling