import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./Firebase/AuthProvider";
import login from "./login.json";


const Register = () => {
  const {register, handleSubmit,  watch, formState: { errors },} = useForm();
  const { createUser, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

   // google login
   const handleGooglelogIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      Swal.fire({
        title: "Registered!",
        text: "You successfully registered!",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };
 
  
  const onSubmit = data => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        title: "Registered!",
        text: "You successfully registered!",
        icon: "success",
      });
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.error(error);
      setLoginError(error.message)
    })
  }

  console.log(watch("example"));

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* -----------------------------  Name  --------------------------- */}
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text" {...register("name")}
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
                type="email" {...register("email")}
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
                type="password"  {...register("password", {
                  required: true,
                  minLength: 6,
                  // maxLength:20,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
               {errors.password?.type === "required" && (
                      <p className="text-red-600">Password is required</p>
                    )}
                {errors.password?.type === "minLength" && (
                      <p className="text-red-600">
                        Password must be 6 characters
                      </p>
                    )}
                    {/* {errors.password?.type ==='maxLength' && 
                <p className='text-red-600'>Password must be less than 20 characters</p>} */}
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have one upper case, one lower case one
                        special character, one number{" "}
                      </p>
                    )}     
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
          <div className="text-center pb-2">
              {
                loginError && <p className="text-base text-red-600 font-bold">
                  Already Used Email or Password </p>
              }
             </div>
          
          <div className="flex pb-4 justify-center">
                  <button
                    onClick={handleGooglelogIn}
                    className="btn btn-ghost font-bold "
                  >
                    <img
                      className="h-8"
                      src="https://i.ibb.co/tJMpW3j/icons8-google-48.png"
                      alt=""
                    />
                    Google Sign Up
                  </button>
                </div>

        </div>

        {/* ------------------------------  lottie animation -------------------------------- */}
        <div className="flex-1">
          <Lottie animationData={login} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Register;
