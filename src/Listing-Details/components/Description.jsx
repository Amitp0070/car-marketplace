import React from 'react'

function Description({carDetail}) {
  return (
    <div className='p-10 rounded-xl bg-white shadow-md mt-6 border'>
      <h2 className='my-2 font-medium text-2xl'>Description </h2>
      {carDetail?.listingDescription?
      <div >
        <p>{carDetail?.listingDescription}</p>
      </div>:
      <div className='w-full h-[100px] animate-pulse bg-slate-200 rounded-xl mt-7'>
        </div>}
    </div>
  )
}

export default Description
