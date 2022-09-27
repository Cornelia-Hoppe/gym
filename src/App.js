import React from "react";
import Homepage from "./Components/Home/Homepage";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import BookingPage from "./booking_page/BookingPage";
import Personal from "./Components/Personal/Trainerspage";
import MinaSidor from "./mina_sidor_page/MinaSidor";
import NotFound from "./NotFound/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import 'react-calendar/dist/Calendar.css';
import LoadingScreen from "./Components/loading_screen/LoadingScreen";
import Webbshop from "./Components/Webbshop/Webbshop"
import AdminPage from "./admin_page/AdminPage"
import CheckUser from "./functions/CheckUser";

function App() {

  CheckUser()

  return (
    <>
      {/* <AdminPage /> */}
      <LoadingScreen />
      <ScrollToTop>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/bookingpage" element={<BookingPage />} />
          <Route path="/staff" element={<Personal />} />
          <Route path="/myprofile" element={<MinaSidor />} />
          <Route path="/webshop" element={<Webbshop />} />
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/webbshop" element={<Webbshop />} /> */}
        </Routes>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
