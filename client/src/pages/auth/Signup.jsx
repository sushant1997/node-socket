import { HiOutlineMail } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { MdKey } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [loginData, setLoginData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
              className="grow"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={loginData.email}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              className="grow"
              placeholder="Full Name"
              name="fullName"
              onChange={handleInputChange}
              value={loginData.fullName}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaUser />
            <input
              type="text"
              className="grow"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={loginData.username}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <MdKey />
            <input
              type="password"
              className="grow"
              placeholder="Password"
              name="password"
              onChange={handleInputChange}
              value={loginData.password}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <MdKey />
            <input
              type="password"
              className="grow"
              placeholder="Confirm Password"
              name="confirmPassword"
              onChange={handleInputChange}
              value={loginData.confirmPassword}
            />
          </label>
          <button className="btn btn-primary">Sign Up</button>
          <p>
            Already have an account?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
