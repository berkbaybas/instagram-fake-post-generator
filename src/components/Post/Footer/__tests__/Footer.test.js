import { render, screen } from "@testing-library/react";
import Footer from "../index";

it("should appear text as Post", () => {
  render(<Footer />);

  const btnElement = screen.getByText(/post/i);
  expect(btnElement).toBeInTheDocument();
});
