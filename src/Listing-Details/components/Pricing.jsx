import { Button } from '@/components/ui/button'
import React from 'react'
import { MdOutlineLocalOffer } from "react-icons/md";

function Pricing({carDetail}) {
  return (
    <div className='p-7 rounded-xl shadow-md border'>
      <h2>Our Price</h2>
      <h2 className='font-bold text-4xl'>${carDetail?.sellingPrice}</h2>
      <div>
        <Button className='w-full mt-7' size='lg'><MdOutlineLocalOffer className='mr-2 text-lg'  />Make an Offer Price</Button>
      </div>
    </div>
  )
}

export default Pricing
