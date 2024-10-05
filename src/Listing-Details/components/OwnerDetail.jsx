import { Button } from '@/components/ui/button'
import React from 'react'

function OwnerDetail({carDetail}) {
  return (
    <div className='p-10 border shadow-md rounded-xl mt-6 '>
        <h2 className='font-medium text-2xl mb-3'>Owner Details</h2>
        <img src={carDetail?.userImageUrl} className='w-[80px] h-[80px] rounded-full' />
        <h2 className='mt-2 text-xl font-bold'>{carDetail?.userName}</h2>
        <h2 className='text-gray-500'>{carDetail?.createBy}</h2>
        <Button className='w-full mt-6'>Message Owner</Button>
    </div>
  )
}

export default OwnerDetail
