import "@testing-library/jest-dom";
import Navbar from "../components/Menu";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const MockNavbar = () => {
    return (
      
        <BrowserRouter>
          <Navbar/>
        </BrowserRouter>
      
    )
  }
const url = "http://localhost/gym";


  
  it('logo should be rendered', () => {
    render(<MockNavbar/>)
    const logo = screen.getByText(/Startsida/i);
    fireEvent.click(logo);
    expect(window.location.href).toBe(`${url}`);
  });
  it('logo should redirect when clicked', () => {
    render(<MockNavbar/>)
    const logo = screen.getByText(/Startsida/i);
    fireEvent.click(logo);
    expect(window.location.href).toBe(`${url}`);
  });