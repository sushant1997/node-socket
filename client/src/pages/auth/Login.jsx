import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdKey } from "react-icons/md";
import { Link } from "react-router-dom";

const Login = () => {
  // const [name, setName] = useState()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <div className="flex justify-center p-6 items-center min-h-screen">
        <div className="max-w-[30rem] w-full flex flex-col gap-5 bg-base-200 p-10">
          <label className="input input-bordered flex items-center gap-2">
            <HiOutlineMail />
            <input
              type="text"
              name="email"
              className="grow"
              value={loginData.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <MdKey />
            <input
              type="password"
              name="password"
              className="grow"
              value={loginData.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </label>
          <button className="btn btn-primary">Login</button>
          <p>
            Don't have an account?{" "}
            <Link className="text-blue-500" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
