import { describe, expect, it } from "vitest";
import fibonacci from "./solution.js";

describe("fibonacci", () => {
  it("returns the base cases", () => {
    expect(fibonacci(0)).toBe(0);
    expect(fibonacci(1)).toBe(1);
  });

  it("returns the correct fibonacci number for typical input", () => {
    expect(fibonacci(6)).toBe(8);
    expect(fibonacci(10)).toBe(55);
  });

  it("handles a larger input efficiently enough for practice", () => {
    expect(fibonacci(45)).toBe(1134903170);
  });

  it("rejects negative input", () => {
    expect(() => fibonacci(-1)).toThrow("non-negative");
  });
});
