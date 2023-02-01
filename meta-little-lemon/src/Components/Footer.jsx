import React from 'react'
import {BsInstagram, BsFacebook, BsReddit, BsTwitter } from "react-icons/bs"

const Footer = () => {
  return ( 
    <>
   <div className='w-full bg-hl1 mx-auto pt-12'>
    <div className='max-w-7xl w-full flex flex-col md:flex-row mx-auto'>
      <div className='flex flex-row mx-auto'>
        <img src={require("../Assets/footerLogo.png")} alt="" />
        <p className='max-w-4xl text-1xl md:text-2xl lg:text-3xl text-hl2 font-extrabold m-auto px-3'>
          Copiright Little Lemon 2023.
        </p>
      </div>
      <div className='flex flex-row m-auto'>
        <a href="https://www.facebook.com/" target="_blank"  rel="noopener noreferrer">
        <BsFacebook size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
        <a href="https://www.instagram.com/" target="_blank"  rel="noopener noreferrer">
        <BsInstagram size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
        <a href="https://www.reddit.com/" target="_blank"  rel="noopener noreferrer">
        <BsReddit size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
        <a href="https://www.twitter.com/" target="_blank"  rel="noopener noreferrer">
        <BsTwitter size={45} className="m-6 text-prim1 hover:text-prim2/80 duration-500" /></a>
      </div>


    </div>

   </div>
    </>
        
  )
}

export default Footer;