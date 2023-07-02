'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

const Admin_Book_insert = ({ update, value, allCategory }) => {
    const [name, set_name] = useState((update) ? value.name : "");
    const [author, set_author] = useState((update) ? value.author : "");
    const [nop, set_nop] = useState((update) ? value.nop : "");
    const [isbn, set_isbn] = useState((update) ? value.isbn : "");
    const [category_id, set_category_id] = useState((update) ? value.category_id : "");
    const router = useRouter();
    const handleInsert = async () => {
        let data = await fetch("/api/book", {
            method: "POST",
            body: JSON.stringify({ name, author, nop, isbn, category_id }),
            headers: {
                "content-type": "application/json"
            }
        })

        data = await data.json();
        router.push("/admin/book/")
    }
    const handleUpdate = async (id) => {
        let data = await fetch(`/api/book/${id}`, {
            method: "PUT",
            body: JSON.stringify({ name, author, nop, isbn, category_id }),
            headers: {
                "content-type": "application/json"
            }
        })
        data = await data.json();
        router.push("/admin/book/")
    }
    return (
        <div>
            <form method='post' onSubmit={(update) ? () => handleUpdate(value._id) : handleInsert} className='w-5/12 p-5 rounded-xl mt-5 bg-slate-300'>
                <div className="mb-3 flex-col flex">
                    <label htmlFor="name">Book name</label>
                    <input type="text" value={name} onChange={(e) => set_name(e.target.value)} id='name' className="border px-2 py-3" />
                </div>
                <div className="mb-3 flex-col flex">
                    <label htmlFor="author">Book author</label>
                    <input type="text" value={author} onChange={(e) => set_author(e.target.value)} id='author' className="border px-2 py-3" />
                </div>
                <div className="mb-3 flex-col flex">
                    <label htmlFor="nop">Book nop</label>
                    <input type="text" value={nop} onChange={(e) => set_nop(e.target.value)} id='nop' className="border px-2 py-3" />
                </div>
                <div className="mb-3 flex-col flex">
                    <label htmlFor="isbn">Book isbn</label>
                    <input type="text" value={isbn} onChange={(e) => set_isbn(e.target.value)} id='isbn' className="border px-2 py-3" />
                </div>
                <div className="mb-3 flex-col flex">
                    <label htmlFor="category">Book category</label>
                    <select className="border px-2 py-3" onChange={(e) => set_category_id(e.target.value)}>
                        {
                            (update) ? <option >{value.category_id}</option> : allCategory.map((value, key) => (
                                <option key={key} value={value._id}>{value.cat_title}</option>
                            ))
                        }
                    </select>

                </div>
                <div className="mb-3">
                    <button className='bg-teal-600 text-white px-3 py-2 rounded w-full' type='submit'>{(update) ? "Update" : "Insert"} Book</button>
                </div>
            </form>
        </div>
    )
}

export default Admin_Book_insert