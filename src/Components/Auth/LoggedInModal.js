import React from "react";
import "./LoggedInModal.css";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

function LoggedInModal() {
  const closeModal = () => {
    document.querySelector("#check-modal").style.display = "none";
  };

  return (
    <div id="check-modal">
      <div className="booking-modal">
        <FaCheck className="check-icon" />
        <h1>Ditt konto har skapats!</h1>
        <p> Du är nu inloggad och omredigeras till startsidan</p>
        <button onClick={closeModal}>OK</button>
      </div>
    </div>
  );
}
export default LoggedInModal;
