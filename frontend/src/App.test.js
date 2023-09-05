import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders 'Create Fairytale' button", () => {
  render(<App />);
  const linkElement = screen.getByText(/Create Fairytale/i);
  expect(linkElement).toBeInTheDocument();
});
