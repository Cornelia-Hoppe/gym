import "./LoadingPage.css";
import style from "../Components/HomeOffer/HomeOffer.module.css";
import Menu from "../Components/Navbar/components/Menu"

import React from "react";

export default function LoadingPage() {
  return (
    <>
      <Menu />
      <div className="loadingPage">
      </div>
    </>
  );
}
