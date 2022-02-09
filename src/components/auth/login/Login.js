import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="min-h-screen min-w-screen bg-slate-300 flex flex-col justify-center align-middle">
      <div className="w-full flex justify-center align-middle">
        <div className="bg-slate-200 shadow-lg flex flex-col justify-center w-full m-4  md:w-1/3 h-auto rounded-md py-3 px-3">
          <h1 className="text-center text-2xl">Login</h1>
          <form className="flex flex-col justify-center">
            <div className="mb-4 w-4/5 ml-auto mr-auto">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Email
              </label>
              <input
                placeholder="Email"
                className="px-1 py-1 rounded-md w-full"
                type="email"
                {...register("email")}
              />
            </div>
            <div className="mb-4 w-4/5 ml-auto mr-auto">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Password
              </label>
              <input
                placeholder="Password"
                type="password"
                className="px-1 py-1 rounded-md w-full"
                {...register("password")}
              />
            </div>
            <div className="ml-auto mr-auto ">
              <Button variant="outlined" >Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
