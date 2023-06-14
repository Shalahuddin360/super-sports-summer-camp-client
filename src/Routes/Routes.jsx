import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Class from "../pages/Class/Class";
import EnrollClass from "../pages/EnrollCourse/EnrollClass/EnrollClass";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import InstructorRoute from "./InstructorRoute";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import PaymentHistory from "../pages/Dashboard/Payment/PaymentHistory";
import InstructorSection from "../pages/Shared/InstructorSection/InstructorSection";




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
         path:'instructors',
         element:<InstructorSection></InstructorSection>
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

      ],
      
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'mySelectedClass',
          element:<MySelectedClass></MySelectedClass>
        },
        
          {
            path:'allUsers',
            element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
          },
          {
            path:'addClass',
            element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
          }
          ,
          {
            path:'/dashboard/payment/:price',
            element:<Payment></Payment>
          },
          {
            path:'paymentHistory',
            element:<PaymentHistory></PaymentHistory>
        
          }
        
      ]
    },
    {
      path:'*',
      element:<ErrorPage></ErrorPage>
    }
  ]);