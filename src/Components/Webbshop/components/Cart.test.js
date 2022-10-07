import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"

import Cart from "./Cart"


test("should render Cart component", () => {
    render(<Cart/>);
    const buyButton = screen.getByTestId("buy-button");

    expect(buyButton).toBeInTheDocument();
})

test("that exit button exist in cart", () => {
    render(<Cart />)
    const exitButton = screen.getByTestId("exit-button")
    
    expect(exitButton).toBeInTheDocument();
})