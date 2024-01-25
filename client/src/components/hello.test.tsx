import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Hello from "./hello";

test("should display Hello World", async () => {
  render(<Hello />);
  expect(screen.getByRole("heading")).toHaveTextContent("Hello World");
});
