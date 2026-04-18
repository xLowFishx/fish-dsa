export default function fibonacci(n) {
  if (n < 0) {
    throw new Error("n must be a non-negative integer");
  }

  if (n < 2) {
    return n;
  }

  let prev = 0;
  let curr = 1;

  for (let index = 2; index <= n; index += 1) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log("fibonacci(0) =", fibonacci(0));
  console.log("fibonacci(1) =", fibonacci(1));
  console.log("fibonacci(6) =", fibonacci(6));
  console.log("fibonacci(10) =", fibonacci(10));
}
