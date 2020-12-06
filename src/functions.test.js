import { timesTwo } from "./functions";
// then we go to function export function timesTwo

// The first argument is the name of the test, the second argument contains what should be tested.
test("Multiplies by two", () => {
  expect(timesTwo(4)).toBe(8);
});
