import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

// const { fireEvent } = require("@testing-library/react");

test("Selecting checkbox", () => {
  // sellect checkbox
  const { getByLabelText } = render(<Checkbox />);
  // We need to handle clicking on the checkbox to make sure value changes.
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  // We expect checkbox.checked to be true.
  expect(checkbox.checked).toEqual(true);
});
