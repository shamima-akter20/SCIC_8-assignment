import Lottie from "lottie-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./Firebase/AuthProvider";
import login from "./login.json";

const Login = () => {

  const {signIn} = useContext(AuthContext);
 
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
      </div>
      
{/* ------------------------------  lottie animation -------------------------------- */}
      <div className="flex-1">
      <Lottie animationData={login} loop={true} />;
      </div>

     </div>


    </div>
  );
};

export default Login;
