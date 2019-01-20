import React, { Suspense } from "react";
import BostonRoutes from "./BostonRoutes";

const Home = () => (
  <div>
    <h1>Welcome Home</h1>

    <Suspense fallback={<div>Fetching data...</div>}>
      <BostonRoutes />
    </Suspense>
  </div>
);

export default Home;
