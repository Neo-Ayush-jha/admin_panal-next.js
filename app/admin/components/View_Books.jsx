import React from 'react'

const BookCard = async ({ props,color }) => {
    return (
        <div className={`${color} text-white hover:text-black px-3 py-2 rounded-lg w-full ring-2`}>
            <h2 className="text-4xl font-black ">{props.name}</h2>
            
            <h2 className="text-3sm font-black ">{props.author} <span className="font-black">{props.nop}</span></h2>
        </div>
    )
}
function View_Books({props}) {
    return (
        <div>
            <div className=" p-10">
                <BookCard color="hover:bg-blue-200 bg-blue-500" props={props} />
            </div>
        </div>
    )
}

export default View_Books