import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../store/auth-slice";
import { login } from "../../../api-service/auth-service";
import { useAlert } from "react-alert";
import { useState, useEffect } from "react";
import useHttp from "../../../hooks/use-http";
import { uiActions } from "../../../store/ui-slice";

const Login = () => {
  const disPatch = useDispatch();
  const alert = useAlert();
  const { sendRequest, status, data, apiError } = useHttp(login);
  const spinnerDispatcher = useDispatch();
  const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    if (isUserLoggedIn) {
      history.replace("/");
    }
  }, []);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setErrorMessage("");
    console.log(data);
    // sendRequest(data);
    try {
      const res = await sendRequest(data);
      console.log(res);
      disPatch(authActions.login());
      history.replace("/");
    } catch (err) {
      console.error(err);
      alert.error(err.message);
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex flex-col justify-center align-middle">
      <div className="w-full flex justify-center align-middle">
        <div className="bg-slate-200 shadow-lg flex flex-col justify-center w-full m-4  md:w-1/3 h-auto rounded-md py-3 px-3">
          <h1 className="text-center text-2xl">Login</h1>
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-4 w-4/5 ml-auto mr-auto">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                placeholder="Email"
                className={`px-1 py-1 rounded-md w-full ${
                  errors.email ? "border border-red-500 bg-red-100" : ""
                }`}
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-[500]">
                  Please check the Email
                </p>
              )}
            </div>
            <div className="mb-4 w-4/5 ml-auto mr-auto">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Password
              </label>
              <input
                placeholder="Password"
                type="password"
                className={`px-1 py-1 rounded-md w-full ${
                  errors.email ? "border border-red-500 bg-red-100" : ""
                }`}
                {...register("password", {
                  required: true,
                  minLength: 4,
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm font-[500]">
                  Please check the Password
                </p>
              )}
            </div>
            <div className="text-center">
              {errorMessage && (
                <p className="text-red-500 text-sm font-bold">{errorMessage}</p>
              )}
            </div>
            <div className="ml-auto mr-auto pt-2">
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </div>

            <div className="ml-auto mr-auto py-2">
              <p className="text-sm font-semibold">
                Don't have an account{" "}
                <Link to="/register" className="text-blue-500">
                  Register here.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
