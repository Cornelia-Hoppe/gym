import React from "react";
import Homepage from "./Components/Home/Homepage";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./booking_page/BookingPage";
import 'react-calendar/dist/Calendar.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookingpage" element={<BookingPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
