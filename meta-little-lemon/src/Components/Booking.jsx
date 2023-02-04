import React from 'react';
import BookingForm from '../Components/BookingForm'
import { useReducer } from 'react';
import { fetchAPI, submitAPI} from "../bokkingsAPI"


const Booking = () => {

  function updateTimes(date) {
        return (
            fetchAPI(date)
        );
    }
    function submitForm(formData) {
      submitAPI(formData)
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);


  return ( 
    <>
    <div id='booking' className='w-full bg-hl1 mx-auto'>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm} />
    </div>
    </>
        
  )
}

export default Booking;