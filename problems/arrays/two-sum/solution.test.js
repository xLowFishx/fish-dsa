import { describe, expect, it } from "vitest";
import twoSum from "./solution.js";

describe("twoSum", () => {
  it("returns the matching indices for a basic example", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("handles duplicate values correctly", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it("handles negative numbers and mixed values", () => {
    expect(twoSum([-3, 4, 3, 90], 0)).toEqual([0, 2]);
  });

  it("works on a larger input without relying on nested loops", () => {
    const numbers = Array.from({ length: 10000 }, (_, index) => index);
    expect(twoSum(numbers, 19997)).toEqual([9998, 9999]);
  });
});
