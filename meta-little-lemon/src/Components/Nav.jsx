import React from 'react'

const Nav = () => {
  return ( 
    <>
    <div className='bg-hl1 max-w-full'>
      <div className='max-w-7xl flex flex-col md:flex-row justify-center mx-auto'>
          <img className='w-2/6 md:hidden lg:flex mx-auto md:mx-1' src={require("../Assets/logo1.png")} alt="logo1" />
          <div className='w-4/6 flex flex-col md:flex-row justify-between mx-auto p-3'>
            <p className="text-2xl md:text-3xl my-1 md:my-16 mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">About</p>
            <p className="text-2xl md:text-3xl my-1 md:my-16 mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Menu</p>
            <p className="text-2xl md:text-3xl my-1 md:my-16 mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Book a table</p>
            <p className="text-2xl md:text-3xl my-1 md:my-16 mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Contact</p>
          </div>
      </div>

    </div>
    </>
        
  )
}

export default Nav;