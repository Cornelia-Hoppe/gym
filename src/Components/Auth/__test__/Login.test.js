import "@testing-library/jest-dom";
import Login from "../Login";
import { BrowserRouter } from "react-router-dom";
import {  render, screen } from "@testing-library/react";



const MockLogin = () => {
  return (
    <BrowserRouter>
      
        <Login />
     
    </BrowserRouter>
  );
};

describe("testing LogIn component", () => {
  test("email-input should be in the document", () => {
    render(<MockLogin />);
    const inputElement = screen.getByPlaceholderText(/test@test.se/i);
    expect(inputElement).toBeInTheDocument();
  });
  
  it('button login should be rendered', () => {
    render(<MockLogin/>)
    const buttons = screen.getByRole('button', {name: "Logga in"})
    expect(buttons).toBeInTheDocument()
  })
 
  it('forgotten password link should be rendered', () => {
    render(<MockLogin/>)
    const forgottenPasswordLink = screen.getByText(/Fel lösenord eller email/i)
    expect(forgottenPasswordLink).toBeInTheDocument()
  })

 
  })
 
 
 