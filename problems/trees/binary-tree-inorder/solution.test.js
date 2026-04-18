import { describe, expect, it } from "vitest";
import inorderTraversal from "./solution.js";

function createNode(value, left = null, right = null) {
  return { value, left, right };
}

describe("inorderTraversal", () => {
  it("returns an empty array for an empty tree", () => {
    expect(inorderTraversal(null)).toEqual([]);
  });

  it("traverses a simple tree in inorder", () => {
    const root = createNode(1, null, createNode(2, createNode(3)));
    expect(inorderTraversal(root)).toEqual([1, 3, 2]);
  });

  it("handles a balanced tree", () => {
    const root = createNode(
      4,
      createNode(2, createNode(1), createNode(3)),
      createNode(6, createNode(5), createNode(7))
    );

    expect(inorderTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("handles a deep left-skewed tree", () => {
    const root = createNode(4, createNode(3, createNode(2, createNode(1))));
    expect(inorderTraversal(root)).toEqual([1, 2, 3, 4]);
  });
});
