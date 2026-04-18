# Binary Tree Inorder Traversal

## Problem

Given the root of a binary tree, return its inorder traversal.

Inorder traversal visits nodes in this order:

1. Left subtree
2. Current node
3. Right subtree

## Expected Function Signature

```js
export default function inorderTraversal(root) {}
```

The input `root` is either `null` or a node with the shape:

```js
{
  value: number,
  left: node | null,
  right: node | null
}
```

## Examples

```text
Input: [1, null, 2, 3]
Output: [1, 3, 2]
```

```text
Input: []
Output: []
```

## Constraints

- The number of nodes is in the range `[0, 100]`
- `-100 <= value <= 100`

## Notes

- A recursive solution is a great starting point
- Think about what order values are pushed into the result array
