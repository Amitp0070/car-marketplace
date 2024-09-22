import Header from '@/components/Header'
import React from 'react'

function AddListing() {
  return (
    <div>
      <Header/>
      <div className='px-10 md:px-20 my-14'>
        <h2 className='font-bold text-3xl'>Add New Listing</h2>
      <form className='p-10 border rounded-xl mt-8'>
        {/* Car Details */}
        <div>
            <h2 className='font-medium text-xl mb-6'>Car Details</h2>
        </div>

        {/* features list */}

        {/* Car image */}
      </form>
      </div>
    </div>
  )
}

export default AddListing
