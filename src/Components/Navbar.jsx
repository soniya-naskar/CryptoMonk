// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Logoicon } from '../assets/Logoicon'

function Navbar() {
  return (
    <div className='bg-black h-16 items-center flex  text-white'>
         <div className="wrapper-container w-full">
          <div className='flex items-center cursor-pointer gap-1'>
            <Logoicon />
            <p><span className='text-yellow-500 font-bold text-1xl'>C</span>rypto  <span className='text-yellow-500 font-bold text-1xl'>M</span>onk</p>
          </div>
       </div>
    </div>
  )
}

export default Navbar