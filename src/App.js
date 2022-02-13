import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";
// const Login = React.lazy(() => import("./components/auth/login/Login"));
// const Register = React.lazy(() =>
//   import("./components/auth/register/Register")
// );
// const Layout = React.lazy(() => import("./components/layout/Layout"));
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Layout from "./components/layout/Layout";
import { useSelector } from "react-redux";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Spinner from "./components/spinner/Spinner";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // optional configuration
  const options = {
    // you can also just use 'bottom center'
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
  };

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <AlertProvider template={AlertTemplate} {...options}>
        <Spinner></Spinner>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          {isUserLoggedIn && <Route path="/" component={Layout}></Route>}
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </AlertProvider>
    </Suspense>
  );
}

export default App;
