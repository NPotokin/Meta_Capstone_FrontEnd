import React from 'react'
import { useState } from "react"
import { availableTimes } from "../data/availableTimes"


const BookingForm = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

  return ( 
    <>
    <div className='max-w-7xl mx-auto flex flex-col'>
        <h1 
        className="max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
            Book the table   
            <span className='text-prim1'> now</span>  and prepare for  
            <span className='text-prim1'> unforgettable</span> experience
        </h1>
        {/* Form */}
        <div className='flex flex-col mx-auto border-2 border-prim1 rounded-3xl w-full justify-center p-3 m-3
         shadow-prim1 shadow-md'>
            <form action="">
                 {/* Date */}
                <div className='flex flex-col md:flex-row'>
                    <label 
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Select Date
                    </label>
                    <input value={date} onChange={ (e) => setDate(e.target.value)}
                    id="res-date"
                    className='text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    type="date" name="res-date"  placeholder='' />
                </div>
                 {/* Time */}
                <div className='flex flex-col md:flex-row'>
                    <label 
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Select Time
                    </label>
                    

                    <select 
                    value={time} onChange={(e) => setTime(e.target.value)}
                    className='text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    name="res-time" id="res-time">
                        {availableTimes.map((item) =>
                            <option value={item.value}>{item.value}</option>
                        )} 
                        
                    </select>
                </div>
                {/* Guests */}
                <div className='flex flex-col md:flex-row'>
                    <label 
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Number of Guests
                    </label>
                    <input 
                    value={guests} onChange={(e) => setGuests(e.target.value)}
                    className=' text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    type="number" name="guests" id="guests" placeholder='1' min="1" max="10" />
                </div>
                {/* Occasion */}
                <div className='flex flex-col md:flex-row'>
                    <label 
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6'>
                    Occasion
                    </label>
                    <select 
                    value={occasion} onChange={(e) => setOccasion(e.target.value)}
                    className=' text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    name="occasion" id="occasion">
                        <option value="Birthday">Birthday</option>
                        <option value="Anniversary">Anniversary</option>
                    </select>
                </div>
                <button type='submit'
                className='mx-auto ml-6 mb-3 w-46 p-3 rounded-xl text-md font-semibold text-hl2
                bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-110 duration-500'>
                Make Your Reservation</button>
            </form>
            
        </div>
    </div>
    </>
        
  )
}

export default BookingForm;