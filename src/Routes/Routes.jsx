import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Class from "../pages/Class/Class";
import EnrollClass from "../pages/EnrollCourse/EnrollClass/EnrollClass";

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
        }
      ]
    },
  ]);