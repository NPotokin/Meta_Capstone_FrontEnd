import React from 'react';
import BookingForm from '../Components/BookingForm'
import { useReducer } from 'react';
import { fetchAPI } from "../bokkingsAPI"


const Booking = () => {

  function updateTimes(date) {
        return (
            fetchAPI(date)
        );
    }

    
  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);


  return ( 
    <>
    <div id='booking' className='w-full bg-hl1 mx-auto'>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </div>
    </>
        
  )
}

export default Booking;