import HomeGallery from "../HomeGallery";
import {
  render,
  fireEvent,
  cleanup,
  getByAltText,
} from "@testing-library/react";
import { screen } from "@testing-library/dom";

afterEach(cleanup);

describe(HomeGallery, () => {
  it("renders a clicked image", () => {
    const { getByAltText } = render(<HomeGallery />);
    const clickedImg = screen.getByAltText(/2/i);
    fireEvent.click(clickedImg);
    const mainImg = screen.getByAltText(/main-2/);

    expect(clickedImg.getAttribute("src")).toBe(mainImg.getAttribute("src"));
  });
});
