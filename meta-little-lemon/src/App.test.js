import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';


test('Renders the /', () => {
  render(<App />);
  const headElement = screen.getByText("Weekly Specials");
  expect(headElement).toBeInTheDocument();

  // const reserveButton = screen.getByText("Order Now");
  // fireEvent.click(reserveButton);

  const headingElementNew = screen.getByText("Daily Specials");
  expect(headingElementNew).toBeInTheDocument();
})

// test('Initialize or Update Times', () => {
// render(<App />);
// const reserveButton = screen.getByText("Make Your Reservation");
// fireEvent.click(reserveButton);

// const testTime = "17:00"
// userEvent.selectOptions(screen.getByLabelText("Select Time"),screen.getByRole('option', { name: testTime}))
// expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
// })
