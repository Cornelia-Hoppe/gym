import React from "react";
import Home from "./Components/Home/Homepage";
import Footer from "./Components/Footer/Footer";
import BookingPage from "./booking_page/BookingPage";
import AdminPage from './admin_page/AdminPage'


function App() {
  return (
    <>
          <BookingPage />
      {/* <Home /> */}
      {/* <Footer /> */}
        <AdminPage /> 
    </>
  );
}

export default App;
