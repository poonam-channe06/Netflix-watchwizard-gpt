
import Browse from "./Browse";
import Signup from "./Signup";
import { createBrowserRouter, Router } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import {addUser,removeUser } from "../utils/userSlice"
const Body = () => {
   const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Signup />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
