import React from "react";
import Homepage from "./Components/Home/Homepage";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./booking_page/BookingPage";
import AdminPage from "./admin_page/AdminPage";

function App() {
  return (
    <>
    <AdminPage />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/bookingpage" element={<BookingPage />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
