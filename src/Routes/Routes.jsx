import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Class from "../pages/Class/Class";
import EnrollClass from "../pages/EnrollCourse/EnrollClass/EnrollClass";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateR from "../pages/Shared/PrivateR/PrivateR";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:"class",
          element:<Class></Class>
        },
        {
          path:'enroll/:classType',
          element:<EnrollClass></EnrollClass>
        },
        {
         path:'login',
         element:<Login></Login>
        },
        {
        path:'register',
        element:<Register></Register>
        },
        {
          path:'private',
          element:<PrivateRoute><PrivateR></PrivateR></PrivateRoute>
        }

      ],
      
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mySelectedClass',
          element:<MySelectedClass></MySelectedClass>
        }
      ]
    }
  ]);