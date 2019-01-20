import React, { Suspense } from "react";
import { Router } from "@reach/router";
const Nav = React.lazy(() => import("./Nav"));
const Home = React.lazy(() => import("./Home"));
const Calculations = React.lazy(() => import("./Calculations"));

const LoadingNav = () => <nav>Loading Nav</nav>;
const LoadingPage = () => <span>Loading Page</span>;

const App = () => (
  <div className="App">
    <Suspense fallback={<LoadingNav />}>
      <Nav />
    </Suspense>

    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Home path="/" />
        <Calculations path="/calculations" />
      </Router>
    </Suspense>
  </div>
);

export default App;
