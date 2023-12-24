import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import login from './login.json';

const Register = () => {
  return (
    <div className="mx-2  md:mx-8 lg:mx-16">

      <h1 className="text-3xl md:text-5xl font-bold text-center my-8">
        Register{" "}
      </h1>

      {/* ------------------------------------ */}
      {/*              design of Form          */}
      {/* ------------------------------------ */}
      <div
        className="flex justify-center items-center flex-col md:flex-row 
      md:gap-10 lg:gap-36"
      >
        <div className="flex-1">
          {/* ------------------------------------ */}
          {/*                  Form                */}
          {/* ------------------------------------ */}
          <form className="card-body">
            {/* -----------------------------  Name  --------------------------- */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* -----------------------------  email  --------------------------- */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* -------------------------  password --------------------------- */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <h1>
              Already have an account?{" "}
              <Link to="/login" className="font-bold ">
                Login
              </Link>{" "}
            </h1>
            {/* ----------------------------  button  --------------------------- */}
            <div className="form-control mt-6">
              <button className="btn btn-active btn-neutral">Register</button>
            </div>
          </form>
        </div>

        {/* ------------------------------  lottie animation -------------------------------- */}
        <div className="flex-1">
          <Lottie animationData={login} loop={true} />;
        </div> 
      </div>
    </div>
  );
};

export default Register;
