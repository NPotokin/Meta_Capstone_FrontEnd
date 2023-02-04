
import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom';

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [time, setTime] = useState(props.availableTimes.map((time) => <option>{time}</option>));

    function handleDate(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setTime(props.availableTimes.map((time) => <option>{time}</option>));
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        <Link to="/confimation"></Link>
        };

    const validForm = () => {
        return (
        date !=="" && time !=="" && guests !=="" && occasion !==""
        );
    };

   
  return ( 
    <>
    <div className='max-w-7xl mx-auto flex flex-col'>
        <h1 data-testid="bookthetable"
        className="max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
            Book the table   
            <span className='text-prim1'> now</span>  and prepare for  
            <span className='text-prim1'> unforgettable</span> experience
        </h1>
        {/* Form */}
        <div className='flex flex-col mx-auto border-2 border-prim1 rounded-3xl w-full justify-center p-3 m-3
         shadow-prim1 shadow-md'>
            <h1 className='max-w-7xl mx-auto text-2xl md:text-3xl lg:text-4xl text-hl2 font-extrabold 
            p-2 py-6 m-2 '>Book the table</h1>
            <form onSubmit={handleSumbit}>
                 {/* Date */}
                <div className='flex flex-col md:flex-row'>
                    <label htmlFor='res-date'
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Select Date
                    </label>
                    <input value={date} onChange={handleDate} 
                    className='text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    type="date" name="res-date"  placeholder='' />
                </div>
                 {/* Time */}
                <div className='flex flex-col md:flex-row'>
                    <label htmlFor='res-time'
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Select Time
                    </label>
                    <select id='res-time'  
                    className='bg-hl1 text-lg md:text-xl lg:text-2xl text-prim1 font-bold '>
                      {time}
                    </select>
                </div>
                {/* Guests */}
                <div className='flex flex-col md:flex-row'>
                    <label htmlFor='guests'
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
                    <label htmlFor='occasion' 
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
                
                

                <Link 
                to={validForm ? "/confirmed" : ""} 
                type='submit' 
                className='mx-auto ml-6 mb-3 w-46 p-3 rounded-xl text-md font-semibold text-hl2
                bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-110 duration-500'>
                    
                Make Your Reservation 
                    
                </Link>
            </form>
            
        </div>
    </div>
    </>
        
  )
}

export default BookingForm;