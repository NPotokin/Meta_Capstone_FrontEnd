import React from 'react'

const Specials = () => {
  return ( 
    <>
    {/* Container Main */}
    <div className='bg-hl1 max-w-full flex flex-col '>
      <h1 
      className=" max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
        Updating menu items 
        <span className='text-prim1'> every month</span> to keep you 
        <span className='text-prim1'> entertained</span></h1>
      {/* Container with main info about Specials */}
      <div className='max-w-7xl w-full mx-auto relative'>
        {/* Overlay */}
        <div className='absolute w-full mx-auto h-full max-h-[400px] bg-prim1/50 hover:bg-prim1/70 flex 
        flex-col justify-around rounded-3xl'>
          <p className='text-hl2 text-4xl mx-auto md:text-5xl lg:text-6xl p-2 m-2 font-extrabold'>Check Out  
          <span className='text-hl1'> Our Specials</span>  </p>
          <p className='text-hl2 mx-auto text-4xl md:text-5xl lg:text-6xl p-2 m-2 font-extrabold'>
          <span className='text-hl1'>Weekly</span>  and 
          <span className='text-hl1'> Daily</span>  Options</p>
        </div>
        {/* Image */}
        <img 
        className='w-full max-h-[400px] object-cover rounded-3xl'
        src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" 
        />
      </div>
      {/* container with week and day specials */}
      <div className='max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-between py-3 gap-3'>
        {/* container with week specials */}
        <div className='max-w-7xl w-full relative mx-auto'>
          {/* Overlay */}
          <div className='absolute mx-auto w-full h-full max-h-[300px]  bg-prim1/50 hover:bg-prim1/70 flex flex-col
           justify-around rounded-3xl p-2'>
            <p className='text-hl1 text-3xl md:text-4xl lg:text-5xl p-2 m-2 font-extrabold mx-auto'>
            Weekly Specials</p>
            <button
            className='mx-auto w-28 p-2 mb-4 rounded-xl text-md font-semibold text-hl2
             bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-110 duration-500'>
              Order Now</button>
          </div>
            <img 
            className='w-full max-h-[300px] object-cover rounded-3xl'
            src="https://images.pexels.com/photos/10432701/pexels-photo-10432701.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>
        {/* container with Daily specials */}
        <div className='max-w-7xl w-full relative mx-auto'>
          {/* Overlay */}
          <div className='absolute mx-auto w-full h-full max-h-[300px] bg-prim1/50 hover:bg-prim1/70 
          flex flex-col justify-around rounded-3xl'>
            <p className='text-hl1 text-3xl md:text-4xl lg:text-5xl p-2 m-2 font-extrabold mx-auto'>
            Daily Specials</p>
            <button
            className='mx-auto w-28 p-2 mb-4 rounded-xl text-md font-semibold text-hl2
             bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-110 duration-500'>
              Order Now</button>
          </div>
            <img 
            className='w-full max-h-[300px] object-cover rounded-3xl'
            src="https://images.pexels.com/photos/5953518/pexels-photo-5953518.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
        </div>

      </div>


    </div>
    </>
        
  )
}

export default Specials;