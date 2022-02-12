import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const Register = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [isShowPasswordsMismatchError, setIsShowPasswordsMismatchError] =
    useState(false);
  const history = useHistory();
  const isUserLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (isUserLoggedIn) {
      history.replace("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setIsShowPasswordsMismatchError(true);
      return;
    } else {
      setIsShowPasswordsMismatchError(false);
    }
    console.log(data);
    history.replace("/");
  };

  const showHidePasswordHandler = () => {
    setIsShowPassword(!isShowPassword);
  };
  const showHideConfirmPasswordHandler = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };
  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex flex-col justify-center align-middle">
      <div className="w-full flex justify-center align-middle">
        <div className="bg-slate-200 shadow-lg flex flex-col justify-center w-full m-4  md:w-1/3 h-auto rounded-md py-3 px-3">
          <h1 className="text-center text-2xl">Register</h1>
          <form
            className="flex flex-col justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-2 w-4/5 ml-auto mr-auto">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                id="fullName"
                placeholder="Full Name"
                className={`px-1 py-1 rounded-md w-full ${
                  errors.fullName ? "border border-red-500 bg-red-100" : ""
                }`}
                type="text"
                {...register("fullName", {
                  required: true,
                  minLength: 4,
                })}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm font-[500]">
                  Please check the Full Name
                </p>
              )}
            </div>
            <div className="mb-2 w-4/5 ml-auto mr-auto">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
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
            <div className="mb-2 w-4/5 ml-auto mr-auto">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  placeholder="Password"
                  type={isShowPassword ? "text" : "password"}
                  onInput={() => setIsShowPasswordsMismatchError(false)}
                  className={`px-1 py-1 rounded-md w-full ${
                    errors.password || isShowPasswordsMismatchError
                      ? "border border-red-500 bg-red-100"
                      : ""
                  }`}
                  {...register("password", {
                    required: true,
                    minLength: 4,
                  })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  {isShowPassword && (
                    <svg
                      className="h-4 text-gray-600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      onClick={showHideConfirmPasswordHandler}
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>
                  )}
                  {!isShowPassword && (
                    <svg
                      className="h-4 text-gray-700"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      onClick={showHideConfirmPasswordHandler}
                    >
                      <path
                        fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm font-[500]">
                  Please check the Password
                </p>
              )}
            </div>
            <div className="mb-2 w-4/5 ml-auto mr-auto">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <div className="relative">
                <input
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  type={isShowConfirmPassword ? "text" : "password"}
                  onChange={() => setIsShowPasswordsMismatchError(false)}
                  className={`px-1 py-1 rounded-md w-full ${
                    errors.confirmPassword || isShowPasswordsMismatchError
                      ? "border border-red-500 bg-red-100"
                      : ""
                  }`}
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 4,
                  })}
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  {isShowConfirmPassword && (
                    <svg
                      className="h-4 text-gray-600"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      onClick={showHideConfirmPasswordHandler}
                    >
                      <path
                        fill="currentColor"
                        d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                      ></path>
                    </svg>
                  )}
                  {!isShowConfirmPassword && (
                    <svg
                      className="h-4 text-gray-700"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                      onClick={showHideConfirmPasswordHandler}
                    >
                      <path
                        fill="currentColor"
                        d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"
                      ></path>
                    </svg>
                  )}
                </div>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm font-[500]">
                  Please check the Confirm Password
                </p>
              )}
              {isShowPasswordsMismatchError && (
                <p className="text-red-500 text-sm font-[500]">
                  password and confirms password are not equal.
                </p>
              )}
            </div>
            <div className="ml-auto mr-auto pt-2 ">
              <Button variant="outlined" type="submit">
                Submit
              </Button>
            </div>
            <div className="ml-auto mr-auto py-2">
              <p className="text-sm font-semibold">
                Have an account already?{" "}
                <Link to="/login" className="text-blue-500">
                  Login here.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
