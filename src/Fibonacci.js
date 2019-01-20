import React from "react";
import useWorker from "./useWorker";

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

export default function Fibonacci({ num }) {
  const result = useWorker(fibonacci, [num]);

  return (
    <div>
      Fib for {num}: <strong>{result}</strong>
    </div>
  );
}
