import React from 'react'
import { Link } from 'react-router-dom';


const ConfirmedBooking = () => {
  return ( 
    <>
    
    <div className="max-w-full bg-hl1 py-72">
      <div className='bg-hl1 max-w-7xl mx-auto flex flex-col'>
        <p className='text-prim1 text-4xl mx-auto md:text-5xl lg:text-6xl p-2 m-2 font-extrabold'>
          Congrats! Your  
          <span className='text-prim2'> Booking</span> is confirmed!</p>
      <Link to="/"
        className='max-w-7xl mx-auto p-4 m-12 rounded-xl text-xl font-semibold text-hl2
         bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-110 duration-500'>
        Got it!
       </Link>
      </div>
    </div>
    
    </>
        
  )
}

export default ConfirmedBooking;