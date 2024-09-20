import Data from '@/Shared/Data'
import React from 'react'

function Category() {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-center text-3xl mb-6'>Browse By Types</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-9
      hover:shadow-lg cursor-pointer lg:grid-cols-9 gap-6 px-20">
        {Data.Category.map((category, index) =>(
          <div className='border rounded-lg p-3 items-center flex flex-col '>
          <img src={category.icon} alt="" width={35} height={35} />
          <h2 className='mt-2'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
