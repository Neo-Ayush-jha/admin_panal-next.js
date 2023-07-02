import React from 'react'


const CategoryCart = async ({ props }) => {
    return (
        <div className={"bg-yellow-700 hover:bg-red-200 text-white hover:text-black px-3 py-2 rounded-lg w-full ring-2"}>
            <h2 className="text-2xl font-black ">{props.cat_title}</h2>
        </div>
    )
}
function All_Category({props}) {
  return (
    <div>
        <CategoryCart props={props}/>
    </div>
  )
}

export default All_Category