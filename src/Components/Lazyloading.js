import React, { lazy, Suspense } from "react";
// import CompC from './Context/CompC';

const CompC = lazy(() => import("./Context/CompC"));

const Lazyloading = () => {
  return (
    <div>
      <h1> hello wrold</h1>
      <hr />
      <Suspense fallback={"loading..."}>
        <CompC />
      </Suspense>
    </div>
  );
};

export default Lazyloading;
