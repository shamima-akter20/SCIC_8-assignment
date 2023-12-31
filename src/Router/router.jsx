import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Main/Main";
import Login from "../Components/Pages.jsx/Login/Login";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import Dashboard from './../Components/Pages.jsx/Dashboard/Dashboard';
import Home from './../Components/Pages.jsx/Home/Home';
import Register from "./../Components/Pages.jsx/Login/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/dashboard",
          element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        
      ]
      
    },
  ]);

  export default router;