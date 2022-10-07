import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StaffBtn from "../StaffBtn";

describe("Test if StaffBtn renders", () => {
  it("StaffBtn renders without crashing", async () => {
    const element = screen.findAllByText("staffBtn");
     render(<StaffBtn />);
  });
});
