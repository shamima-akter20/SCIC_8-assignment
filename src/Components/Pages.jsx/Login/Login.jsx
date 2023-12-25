import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "./Firebase/AuthProvider";
import login from "./login.json";

const Login = () => {

  const {signIn, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState('');

  const from = location.state?.from?.pathname || "/";

   // google login
   const handleGooglelogIn = () => {
    googleSignIn()
    .then((result) => {
      console.log(result.user);
      Swal.fire({
        title: "Logged In!",
        text: "You successfully logged in!",
        icon: "success"
      });
      navigate(from, { replace: true });
    });
  };
 
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // sign in
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "Logged In!",
        text: "You successfully logged in!",
        icon: "success"
      });
      navigate(from, { replace: true });
    })
    .catch(error =>{
      console.error(error);
      setLoginError(error.message)
    })
  }

  return (
    <div className="mx-2  md:mx-8 lg:mx-16">
        <h1 className="text-3xl md:text-5xl font-bold text-center my-8">Login </h1>

     {/* ------------------------------------ */}
     {/*            design of Form            */}
     {/* ------------------------------------ */}
     <div className="flex justify-center items-center flex-col md:flex-row 
      md:gap-10 lg:gap-36">

     <div className="flex-1">
     {/* ------------------------------------ */}
     {/*                  Form                */}
     {/* ------------------------------------ */}
        <form onSubmit={handleLogin} >
      {/* -----------------------------  email  --------------------------- */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email" name='email'
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
              type="password" name='password'
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>
          <h1>No account? <Link to="/register" className="font-bold ">Register</Link> </h1>
         {/* ----------------------------  button  --------------------------- */}    
          <div className="form-control mt-6">
            <button className="btn btn-active btn-neutral">Login</button>
          </div>
      </form>
      <div className="text-center pb-2">
              {
                loginError && <p className="text-base text-red-600 font-bold">
                  Incorrect Email or Password </p>
              }
             </div>
      <div className="flex pb-6 justify-center">  
              <button 
              onClick={handleGooglelogIn}
               className="btn btn-ghost font-bold ">
              <img className="h-8" src="https://i.ibb.co/tJMpW3j/icons8-google-48.png" alt="" />
               Google Login 
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

export default Login
