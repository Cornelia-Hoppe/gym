import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import Homepage from "./Components/Home/Homepage";
import Footer from "./Components/Footer/Footer";
import LoadingPage from "./LoadingPage/LoadingPage";
const BookingPage = lazy(() => import("./booking_page/BookingPage"));
const Personal = lazy(() => import("./Components/Personal/Trainerspage"));
const MinaSidor = lazy(() => import("./mina_sidor_page/MinaSidor"));
const NotFound = lazy(() => import("./NotFound/NotFound"));
const ScrollToTop = lazy(() => import("./Components/ScrollToTop"));
const Webbshop = lazy(() => import("./Components/Webbshop/Webbshop"));
const AdminPage = lazy(() => import("./admin_page/AdminPage"));
//Routen till Admin ska ej finnas vid launch, är bara tillfällig.
function App() {
  return (
    <>
      {/* <LoadingScreen /> */}
      <ScrollToTop>
        <Suspense fallback={<LoadingPage/>}>
          <Routes>
            <Route path="/gym" element={<Homepage />} />
            <Route path="/" element={<Navigate replace to="/gym" />} />
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/staff" element={<Personal />} />
            <Route path="/myprofile" element={<MinaSidor />} />
            <Route path="/webshop" element={<Webbshop />} />
            <Route path="/admin" element={<AdminPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
      <Footer />
    </>
  );
}

export default App;
