import React from 'react'
import About from "./About";
import Specials from "./Specials";
import Dishes from "./Dishes";
import Testimonials from "./Testimonials";
import Booking from "./Booking";
import { Route, Routes  } from 'react-router-dom';
import ConfirmedBooking from './ConfirmedBooking';

const InteractiveNav = () => {
  return ( 
    <>
        <Routes>
            <Route path='/' element = {
                <Specials />
            } />

            <Route path='/about' element = {
                <About />
            } />

            <Route path='/dishes' element = {
                <Dishes />
            } />


            <Route path='/booking' element = {
                <Booking />
            } />

            <Route path='/testimonials' element = {
                <Testimonials/>
            } />

            <Route path='/confirmed' element = {
                <ConfirmedBooking/>
            } />

        </Routes>
    </>
        
  )
}

export default InteractiveNav;