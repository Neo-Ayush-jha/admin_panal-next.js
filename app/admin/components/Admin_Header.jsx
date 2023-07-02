import Link from 'next/link'
import React from 'react'

function adminHeader() {
  return (
    <>
        <div className="bg-black text-white flex flex-1 justify-between px-10 py-3 items-center">
            <Link href="" className='text-white text-2xl font-bold'>Admin Panel</Link>

            <div className="flex gap-2">
                <Link href="/admin" className='text-white font-semibold'>Dashboard</Link>
                <Link href="/" className='text-white font-semibold'>Logout</Link>
            </div>
        </div>
    </>
  )
}

export default adminHeader