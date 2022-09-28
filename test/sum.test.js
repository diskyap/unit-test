import { sum } from "../src/index.js";

test("sum function pass", () => {
  const result = sum(3, 4);
  expect(result).toBe(7); // PASS
});
