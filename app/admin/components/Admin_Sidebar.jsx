import Link from 'next/link'
import React from 'react'

function Admin_Sidebar() {
  return (
    <div className='w-full bg-slate-800  text-white h-[96vh] flex flex-col'>
        <Link href="/admin" className='px-5 py-3 text-white hover:bg-slate-500'>Dashboard</Link>
        <Link href="/admin/category/manage" className='px-5 py-3 text-white hover:bg-slate-500'>Manage Category</Link>
        <Link href="/admin/category/insert" className='px-5 py-3 text-white hover:bg-slate-500'>Insert Category</Link>
        <Link href="/admin/book/manage" className='px-5 py-3 text-white hover:bg-slate-500'>Manage Books</Link>
        <Link href="/admin/book/insert" className='px-5 py-3 text-white hover:bg-slate-500'>Insert Books</Link>
        <Link href="/admin/book/" className='px-5 py-3 text-white hover:bg-slate-500'>View Books</Link>
        <Link href="/admin/category" className='px-5 py-3 text-white hover:bg-slate-500'>View Category</Link>
        <Link href="/register" className='px-5 py-3 text-white hover:bg-blue-500'>Singup</Link>
        <Link href="/login" className='px-5 py-3 text-white hover:bg-red-500'>Login</Link>
        <Link href="/logout" className='px-5 py-3 text-white hover:bg-red-500'>Logout</Link>
    </div>
  )
}

export default Admin_Sidebar