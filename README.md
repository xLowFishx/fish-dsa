# fish-dsa

A minimal Node.js + `pnpm` project for practicing data structures and algorithms in JavaScript.

## Stack

- Node.js
- `pnpm`
- ES Modules
- Vitest

## Getting Started

Install dependencies:

```bash
pnpm install
```

## Practice Workflow

1. Open a problem in `problems/<topic>/<problem>/README.md`
2. Read the prompt, examples, and constraints
3. Implement your solution in `solution.js`
4. Run the problem directly with `node` if you want to inspect `console.log` output
5. Run the tests
6. If needed, open `hints.md`
7. Improve the solution for time and space complexity

## CLI Commands

Run all tests:

```bash
pnpm test
```

Run tests in watch mode:

```bash
pnpm test:watch
```

Run one problem's tests:

```bash
pnpm test:problem -- problems/recursion/fibonacci
pnpm test:problem -- problems/arrays/two-sum
pnpm test:problem -- problems/trees/binary-tree-inorder
```

The path after `--` should point to a single problem folder.

Run a solution file directly with Node:

```bash
pnpm run run problems/recursion/fibonacci/solution.js
pnpm run run problems/arrays/two-sum/solution.js
```

This is useful when you want to keep `console.log` calls in your solution while iterating.

## Example Commands

```bash
pnpm test:problem -- problems/recursion/fibonacci
pnpm run run problems/recursion/fibonacci/solution.js
```

## Project Structure

Each topic lives in `problems/<topic>/`, and each problem gets its own folder:

```text
problems/
  recursion/
    fibonacci/
      README.md
      hints.md
      solution.js
      solution.test.js
  arrays/
    two-sum/
      README.md
      hints.md
      solution.js
      solution.test.js
  trees/
    binary-tree-inorder/
      README.md
      hints.md
      solution.js
      solution.test.js
```

## Problem Authoring Convention

Every problem folder should contain:

- `README.md`: problem statement, examples, constraints, expected function signature
- `hints.md`: progressive hints, ending with optimization guidance
- `solution.js`: starter or working solution
- `solution.test.js`: correctness, edge-case, and performance-oriented checks when relevant

## Seed Problems

- `problems/recursion/fibonacci`
- `problems/arrays/two-sum`
- `problems/trees/binary-tree-inorder`

These are included as examples so you can copy the structure for new topics and problems.
