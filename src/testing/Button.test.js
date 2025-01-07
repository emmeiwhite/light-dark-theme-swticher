import { render, screen } from "@testing-library/react";
import { act } from "react";
import Button from "./Button";

// let's write our first test to check whether a button exists in our Component with a text "Subscribe"
test("check whether a button exist with text Subscribe", () => {
  //1. render the component
  render(<Button />); // Renders our Component in a fake Browser Environment provided by RTL

  //2. query the artificial DOM
  const subsBtn = screen.getByText("Subscribe");

  //3. Assertion
  expect(subsBtn).toBeInTheDocument();
});
