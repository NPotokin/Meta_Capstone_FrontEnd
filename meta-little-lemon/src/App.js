import React, {useState, useReducer} from "react";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Specials from "./Components/Specials";
import Dishes from "./Components/Dishes";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import Booking from "./Components/Booking";



function App() {

  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
 
  const initialState = {availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"] }
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state) {
    return {availableTimes: ["test"]}
}

  return (
    <>
    <Nav />
    <About />
    <Specials />
    <Dishes />
    <Booking availableTimes={state} dispatch={dispatch}/>
    <Testimonials />
    <Footer />
    </>
  );
}


export default App;
