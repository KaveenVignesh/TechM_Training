import React, { Suspense } from "react";
import { Func, Func1, Func2 } from "./component/training/component";
const Component = React.lazy(() => import("./component/training/Counter"));
const ABComponent2 = React.lazy(() =>
  import("./component/training/ABComponent2")
);


function AB1_React() {
  return (
    <div>
      <h1>Welcome to ReactApp with Vite and AB1_React!!!</h1>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Func />
        <Func1 />
        <Func2 />
        <ABComponent2 />
        <Component/>
      </Suspense>
    </div>
  );
}

export default AB1_React;
