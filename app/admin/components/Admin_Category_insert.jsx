'use client'
import { useRouter } from 'next/navigation';
import  { useState } from 'react'

const Admin_Category_insert=({update,value})=> {
    const [cat_title,set_cat_title] = useState((update) ? value.cat_title:"");
    const router = useRouter();
    const handleInsert=async ()=>{
        let data = await fetch("/api/category",{
            method:"POST",
            body:JSON.stringify({cat_title}),
            headers:{
                "content-type":"application/json"
            }
        })
        data=await data.json();
        router.push("/admin/category/")
    }
    const handleUpdate=async (id)=>{
        let data = await fetch(`/api/category/${id}`,{
            method:"PUT",
            body:JSON.stringify({cat_title}),
            headers:{
                "content-type":"application/json"
            }
        })
        data=await data.json();
        router.push("/admin/category/")
    }
  return (
    <div>
        <form method='post' onSubmit={(update) ? ()=>handleUpdate(value._id) : handleInsert} className='w-5/12 p-5 rounded-xl mt-5 bg-slate-300'>
            <div className="mb-3 flex-col flex">
                <label htmlFor="cat_title">Category title</label>
                <input type="text" value={cat_title} onChange={(e)=>set_cat_title(e.target.value)} className="border px-2 py-3" />
            </div>
            <div className="mb-3">
            <button className='bg-teal-600 text-white px-3 py-2 rounded w-full' type='submit'>{(update) ? "Update":"Insert"} Category</button>
            </div>
        </form>
    </div>
  )
}

export default Admin_Category_insert