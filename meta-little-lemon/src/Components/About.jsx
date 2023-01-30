import React from 'react'


const About = () => {
  return ( 
    <>
    {/* Container with BG and flex directions */}
    <div id="about" className="max-w-full bg-hl1">
      <div className='bg-hl1 max-w-7xl mx-auto flex flex-col'>
        
        {/* Main Container */}
        <div className='max-w-7xl w-full mx-auto relative'>
          {/*Overlay*/}
          <div className='absolute max-w-7xl w-full mx-auto h-full max-h-[500px] bg-prim1/60 hover:bg-prim1/70 flex 
          flex-row justify-between rounded-3xl'>
            <div className='flex flex-col m-6'>
              <p className='text-prim2 text-3xl md:text-4xl lg:text-5xl p-1 m-1 font-extrabold'>Little Lemon</p>
              <p className='text-hl1 text-2xl  md:text-3xl lg:text-4xl p-1 m-1 font-extrabold'>Chicago</p>
              <p className='text-hl1 text-xl my-auto md:text-2xl lg:text-3xl p-1 m-1 font-extrabold'>
                We are family owned mediterranean restaurant, focused on traditional recipies served with the morden twist.
              </p>
              <button
              className='absolute bottom-2 right-8 w-36 p-2 mb-4 rounded-xl text-md font-semibold text-hl2
               bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-110 duration-500'>
              Reserve A Table</button>
            </div>
          </div>
          <img 
            className='w-full max-h-[500px] object-cover rounded-3xl'
            src="https://images.pexels.com/photos/3933217/pexels-photo-3933217.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" 
          />


        

        </div>
      </div>
    </div>
    </>
        
  )
}

export default About;