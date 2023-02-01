import React from 'react'
import {SlArrowLeft, SlArrowRight} from "react-icons/sl"
import { reviewData } from '../data/reviewData'
import { useState } from 'react'

const Testimonials = () => {
    let i = 0;
    const [reviewItem, setReviewItem] = useState(reviewData[i]);

    const nextItem =() => {
      i < 2 ? i = i + 1 : i = 0;
      setReviewItem(reviewData[i])
    };
    
    const prevItem =() => {
      i >= 0 ? i = i + 1 : i = 0;
      setReviewItem(reviewData[i - 1])
    };

   return ( 
    <>
    <div id="testimonials" className='w-full bg-hl1'>
      <div className='max-w-7xl w-full mx-auto flex flex-col'>
        <h1 
          className=" max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
          See what  <span className='text-prim1'> Our Customers</span> really think about  
          <span className='text-prim1'> Us</span> 
        </h1>
        <div className='flex flex-row justify-between'>
          <SlArrowLeft
          onClick={() => prevItem()}
          size={50} className="text-prim1 hover:text-prim2 m-auto" />
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row justify-around'>
              <img 
              className='max-w-xs md:max-w-sm max-h-sm rounded-full mx-auto' 
              src={reviewItem.img} alt={reviewItem.name} />
              <p className='max-w-6xl text-3xl md:text-4xl lg:text-5xl text-prim1 font-extrabold m-auto p-6'>{reviewItem.name}</p>
            </div>
            <p className='max-w-5xl text-2xl md:text-3xl lg:text-4xl text-hl2 font-extrabold m-auto p-6'>
              {reviewItem.text}</p>
          </div>
          <SlArrowRight 
          onClick={() => nextItem()}
          size={50} className="text-prim1 hover:text-prim2 m-auto" />
        </div>
      </div>
      



    </div>
    </>
        
  )
}

export default Testimonials;