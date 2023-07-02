import React from 'react'
import Admin_Book_Calling from '../../components/Admin_Book_Calling';
import Link from 'next/link'

const page = async () => {
  let callinBook = await fetch("http://127.0.0.1:3000/api/book", { cache: "no-store" })
  callinBook = await callinBook.json();
  let allBooks = callinBook.data;
  return (
    <>
      <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-black">Manage Book (1)</h2>
          <Link href="/admin/book/insert" className='bg-teal-600 text-white px-3 py-2 rounded'>Insert Book</Link>
        </div>
        <div className="flex flex-col mt-5">
          <Admin_Book_Calling allBooks={allBooks} />
        </div>
      </div>
    </>
  )
}

export default page