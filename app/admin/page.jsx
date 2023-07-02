import Link from 'next/link'
import React from 'react'


const DashboardCard = async ({ color, title, value }) => {
    return (
        <div className={`${color} text-white px-3 py-2 rounded-lg w-full ring-2`}>
            <h2 className="text-4xl font-black text-white">{value}</h2>
            <h2 className="text-2xl font-black text-white">{title}</h2>
        </div>
    )
}
const page=async()=> {
    let callingCategory = await fetch("http://127.0.0.1:3000/api/category");
    callingCategory = await callingCategory.json()
    callingCategory = (callingCategory) ? callingCategory.data.length : callingCategory.data.length + 1;

    let callingBooks = await fetch("http://127.0.0.1:3000/api/book");
    callingBooks= await  callingBooks.json()
    callingBooks =  (callingBooks) ? callingBooks.data.length : callingBooks.data.length + 1 ;

    return (
        <div className="grid grid-cols-3 gap-10 p-10">
            <DashboardCard color="bg-green-600" title="Total Book" value={callingBooks} />
            <DashboardCard color="bg-sky-600" title="Total Category" value={callingCategory} />
            <DashboardCard color="bg-red-600" title="total User" value="25" />
        </div>
    )
}

export default page