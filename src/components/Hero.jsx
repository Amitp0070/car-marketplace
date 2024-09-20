import React from 'react'
import Search from './Search'

function Hero() {
  return (
    <div className='flex flex-col items-center p-5 py-10 gap-5 h-[500px] w-full bg-[#eef0fc]'>
      <h2 className='text-base'>Find cars for sale and for the rent near you</h2>
      <h1 className='text-[50px] font-bold'>Find Your Dream Car</h1>
      <Search/>
      <img src="/tesla.png" alt="audi" className='' />
    </div>

  )
}

export default Hero
