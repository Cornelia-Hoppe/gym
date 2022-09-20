import "./NotFound.css";
import style from "../Components/HomeOffer/HomeOffer.module.css";
import Menu from "../Components/Navbar/components/Menu"

import React from "react";

export default function NotFound() {
  return (
    <>
      <Menu />
      <div className="profile-wrapper">
        <h1>404 Page not found</h1>
      </div>
    </>
  );
}
