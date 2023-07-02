"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

function Admin_Category_Calling({ allBooks }) {
    const router = useRouter()
    const handelDelete = async(id)=>{
        let data=await fetch(`/api/book/${id}`,{
            method : "DELETE",
            headers:{
                "content-type":"application/json"
            }
        })
        data=await data.json();
        router.push("/admin/book/")
    }
    return (
        <div className="border">
            <table className="border">
                <thead>
                    <tr>
                        <th className="border p-2 hidden md:inline-flex ">Id</th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Author</th>
                        <th className="border p-2">nop</th>
                        <th className="border p-2">isbn</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allBooks.map((value, key) => (
                            <tr key={key}>
                                <td className="border p-2">{value._id}</td>
                                <td className="border p-2">{value.name}</td>
                                <td className="border p-2">{value.author}</td>
                                <td className="border p-2">{value.nop}</td>
                                <td className="border p-2">{value.isbn}</td>
                                <td className="border p-2">{value.category_id}</td>
                                <td className="border p-2 gap-2 flex">
                                <button className="bg-red-600 text-white px-3 py-2 rounded" onClick={()=>handelDelete(value._id)}>Delete</button>
                                <Link href={`/admin/book/update/${value._id}`} className="bg-sky-600 text-white px-3 py-2 rounded" >Edit</Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Admin_Category_Calling