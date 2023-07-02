import React from 'react'
import Admin_Category_Calling from '../components/Admin_Category_Calling';
import Link from 'next/link'
import All_Category from '../components/All_Category';

const page = async () => {
  let callingCategory = await fetch("http://127.0.0.1:3000/api/category", { cache: "no-store" })
  callingCategory = await callingCategory.json();
  let allCategory = callingCategory.data;
  return (
    <>
      <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-black">Manage Category (1)</h2>
          <Link href="/admin/category/insert" className='bg-teal-600 text-white px-3 py-2 rounded'>Insert Category</Link>
        </div>
        <div className="flex flex-col mt-5 grid grid-cols-3 gap-10">
        {
          allCategory.map((value,key)=>(<All_Category props={value} key={key}/>))
        }
        </div>
      </div>
    </>
  )
}

export default page