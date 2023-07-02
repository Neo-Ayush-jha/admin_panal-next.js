import React from 'react'
import Link from 'next/link'
import View_Books from '../components/View_Books';

const page = async () => {
  let callinBook = await fetch("http://127.0.0.1:3000/api/book", { cache: "no-store" })
  callinBook = await callinBook.json();
  let allBooks = callinBook.data;
  return (
    <>
      <div className='flex flex-col p-10'>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-black">Manage Book (1)</h2>
          <Link href="/admin/book/manage" className='bg-teal-600 text-white px-3 py-2 rounded'>Show Book's list</Link>
        </div>
        <div className="flex flex-col mt-5 grid grid-cols-3 gap-10">
        {allBooks.map((props, key) => (<View_Books props={props} key={key} />))}

        </div>
      </div>
    </>
  )
}

export default page