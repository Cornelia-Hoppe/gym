import React from "react"
import AdminPage from "./admin_page/AdminPage";
import BookingPage from "./booking_page/BookingPage";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Homepage";

function App() {

  // INNAN MERGE!!!!
  //    TA BORT AdminPage och BookingPage från index.js + denna kommentaren

  return (
    <>
    <BookingPage />
    <Header />
    <Home />
    <AdminPage />
    </>
  );

}

export default App;
