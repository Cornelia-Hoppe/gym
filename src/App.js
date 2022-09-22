import React from "react";
import Homepage from "./Components/Home/Homepage";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import BookingPage from "./booking_page/BookingPage";
import Personal from "./Components/Personal/Trainerspage";
import MinaSidor from "./mina_sidor_page/MinaSidor";
import NotFound from "./NotFound/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import 'react-calendar/dist/Calendar.css';
import LoadingScreen from "./Components/loading_screen/LoadingScreen";

import AdminPage from './admin_page/AdminPage'

function App() {
  return (
    <>
      <AdminPage />
      <LoadingScreen />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/staff" element={<Personal />} />
          <Route path="/myprofile" element={<MinaSidor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    
    </>
  );
}

export default App;
