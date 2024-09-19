import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div className='flex flex-col items-center p-10 py-16 gap-6 h-[600px] w-full bg-[#eef0fc]'>
      <h2 className='text-lg'>Find cars for sale and for the rent near you</h2>
      <h1 className='text-[60px] font-bold'>Find Your Dream Car</h1>
      <Search/>
    </div>

  )
}

export default Hero
