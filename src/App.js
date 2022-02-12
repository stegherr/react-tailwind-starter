import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";
// const Login = React.lazy(() => import("./components/auth/login/Login"));
// const Register = React.lazy(() =>
//   import("./components/auth/register/Register")
// );
// const Layout = React.lazy(() => import("./components/layout/Layout"));
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/" component={Layout}></Route>
      </Switch>
    </Suspense>
  );
}

export default App;
