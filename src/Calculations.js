import React, { Suspense } from "react";
import Fibonacci from "./Fibonacci";

const Calculations = () => (
  <div>
    <h1>Calculations</h1>

    <Suspense fallback={<div>Calculating... fib of 10</div>}>
      <Fibonacci num={10} />
    </Suspense>
    <Suspense fallback={<div>Calculating... fib of 42</div>}>
      <Fibonacci num={42} />
    </Suspense>
  </div>
);

export default Calculations;
