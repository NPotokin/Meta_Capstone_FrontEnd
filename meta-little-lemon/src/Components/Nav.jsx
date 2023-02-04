import React, { useState } from 'react'
import {BsCartFill} from "react-icons/bs"
import { Link } from 'react-router-dom'

const Nav = () => {

  const [nav, setNav] = useState(true)

  
  return ( 
    <>
    <div className='bg-hl1 max-w-full sticky z-10 top-0'>
      <div className=' max-w-7xl flex flex-col justify-between mx-auto'>
          <div className='max-w-7xl flex flex-row justify-between'>
            <img onClick={ () => setNav(!nav)}
            className='w-full max-w-[300px] cursor-pointer' src={require("../Assets/logo1.png")} alt="logo1" />
            <button>
              <BsCartFill size={40} className="text-prim1 my-auto mx-6 hover:text-prim2 duration-500 hover:scale-105" />
            </button>
          </div>
          <nav className={ nav ? 'w-full flex flex-col md:flex-row mx-auto my-auto' : 'hidden'}>
            <Link to="/" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Home</Link>
            <Link to="/about" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">About</Link>
            <Link to="/dishes" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Menu</Link>
            <Link to="/booking" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Book a table</Link>
            <Link to="/testimonials" className="text-2xl md:text-3xl my-1  mx-auto text-prim1 font-extrabold hover:scale-105 hover:text-prim2 duration-500">Reviews</Link>
          </nav>
        </div>
      </div>
    </>
        
  )
}

export default Nav;