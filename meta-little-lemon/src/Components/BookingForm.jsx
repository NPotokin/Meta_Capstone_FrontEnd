
import React from 'react'
import { useState, useEffect } from "react"
import { Link, Route, Routes } from 'react-router-dom';
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import ConfirmedBooking from './ConfirmedBooking'


const BookingForm = () => {
    const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        const times =[];
        for (let i = 17; i <= 23; i++){
            times.push(`${i}:00`);
        }
        setAvailableTimes(times);
    }, []);


  return ( 

    <>
    <div className='max-w-7xl mx-auto flex flex-col'>
        <h1 data-testid="bookthetable"
        className="max-w-7xl mx-auto text-4xl md:text-5xl lg:text-6xl text-hl2 font-extrabold p-2 py-6 m-2 ">
            Book the table   
            <span className='text-prim1'> now</span>  and prepare for  
            <span className='text-prim1'> unforgettable</span> experience
        </h1>
        <h1 className='max-w-7xl mx-auto text-2xl md:text-3xl lg:text-4xl text-hl2 font-extrabold 
        p-2 py-6 m-2 '>Book the table
        </h1>

        <Formik
            initialValues={{
                date: "",
                time: "",
                guests: "",
                occasion: "",  
            }}
            validationSchema={Yup.object({
                // date: Yup.string().required("Required"),
                time: Yup.string().required("Required"),
                guests: Yup.number()
                .required("Required")
                .min(1, "Minimum of 1 guest required")
                .max(10, "Maximum of 10 guests allowed"),
                occasion: Yup.string().required("Required"),
            })}
            
        > 
        {({ errors, touched }) => (
            
            <Form 
            className='flex flex-col mx-auto border-2 border-prim1 rounded-3xl w-full justify-center p-3 m-3
            shadow-prim1 shadow-md'>
                {/* Date */}
                <div className='flex flex-col md:flex-row'>
                    <label htmlFor='res-date'
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Select Date
                    </label>
                    <Field 
                    className='text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    type="date" name="res-date"  placeholder=''/>
                    {errors.date && touched.date ? <div>{errors.date}</div> : null}
                </div>
                 {/* Time */}
                <div className='flex flex-col md:flex-row'>
                    <label htmlFor='res-time'
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Select Time
                    </label>
                    <Field
                    className='bg-hl1 text-lg md:text-xl lg:text-2xl text-prim1 font-bold '
                     as="select" name="time">
                        <option value="">Select a time</option>
                         {availableTimes.map((time) => (
                        <option key={time} value={time}>
                        {time}
                        </option>
                        ))}
                    </Field>
                    {errors.time && touched.time ? <div>{errors.time}</div> : null}
                </div>
                {/* Guests */}
                <div className='flex flex-col md:flex-row'>
                    <label htmlFor='guests'
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6' 
                    >Number of Guests
                    </label>
                    <Field  
                    className=' text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    type="number" name="guests" id="guests" placeholder='1' min="1" max="10" />
                    {errors.guests && touched.guests ? (<div>{errors.guests}</div>) : null}
                </div>
                {/* Occasion */}
                <div className='flex flex-col md:flex-row'>
                    <label htmlFor='occasion' 
                    className='justify-left text-xl md:text-2xl lg:text-3xl text-prim1 font-extrabold  p-6'>
                    Occasion
                    </label>
                    <Field as="select" name="occasion" id="occasion"   
                    className=' text-xl md:text-2xl lg:text-3xl text-hl2 font-extrabold p-6 bg-hl1'
                    >
                        <option value="">Select an occasion</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="graduation">Graduation</option>
                    </Field>
                    {errors.occasion && touched.occasion ? (<div>{errors.occasion}</div>) : null}
                </div>
                <button type='submit' aria-label='On Submit'
                className='mx-auto ml-6 mb-3 w-46 p-3 rounded-xl text-md font-semibold text-hl2
                bg-prim2 hover:text-prim1 hover:bg-sec1 hover:scale-110 duration-500' >
                    <Link to="/confirmed">Make a Reservation</Link>
                </button>



                
            </Form>)}

        </Formik>

        </div>
                <Routes>
                    <Route path="/confirmed" element={<ConfirmedBooking />} ></Route>
                </Routes>
        </>
            
      )
    }
    
    export default BookingForm;









    
       
                 
                
               
     