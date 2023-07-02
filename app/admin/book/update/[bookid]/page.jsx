import Link from 'next/link'
import React from 'react'
import Admin_Book_insert from '../../../components/Admin_Book_insert'


const page = async({params}) => {
    let  callingOneBook = await fetch(`http://127.0.0.1:3000/api/book/${params.bookid}`)
    callingOneBook = await callingOneBook.json()
    let  allCategory =callingOneBook.data
    return (
        <>
            <div className='flex flex-col p-10'>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-black">Manage Category (1)</h2>
                    <Link href="/admin/book/manage" className='bg-teal-600 text-white px-3 py-2 rounded'>Show All Book</Link>
                </div>
                <div className="flex flex-col mt-5">
                    <Admin_Book_insert update={true} value={callingOneBook.data} allCategory={allCategory}/>
                </div>
            </div>
        </>
    )
}

export default page