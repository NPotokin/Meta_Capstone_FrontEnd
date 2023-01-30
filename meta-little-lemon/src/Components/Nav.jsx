import React from 'react'

const Nav = () => {
  return ( 
    <>
    <div className='bg-hl1 max-w-full sticky z-10 top-0'>
      <div className='max-w-7xl flex flex-col md:flex-row justify-center mx-auto'>
          <img className='mx-auto' src={require("../Assets/logo1.png")} alt="logo1" />
          <nav className='w-full flex flex-col md:flex-row mx-auto p-3 my-auto'>
            <a href="#about" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">About</a>
            <a href="#menu" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Menu</a>
            <a href="#booking" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Book a table</a>
            <a href="#testimonials" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Reviews</a>
          </nav>
          
        </div>
      </div>
    </>
        
  )
}

export default Nav;