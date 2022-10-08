
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"

import Menu from "./Menu"


test("that mobile button exist in menu", () => {
    render(<Menu />)
    const menuButton = screen.getByTestId("mobile-button")
    
    expect(menuButton).toBeInTheDocument();
})