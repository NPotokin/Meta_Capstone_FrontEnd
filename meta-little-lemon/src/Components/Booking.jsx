
import BookingForm from '../Components/BookingForm'


const Booking = (props) => {
  return ( 
    <>
    <div id='booking' className='w-full bg-hl1 mx-auto'>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} />
    </div>
    </>
        
  )
}

export default Booking;