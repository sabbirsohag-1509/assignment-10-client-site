import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/SignUp/Register";
import LogIn from "../pages/LogIn/LogIn";
import AddProperty from "../pages/AddProperty/AddProperty";
import AllProperties from "../pages/AllProperties/AllProperties";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/add-property",
        element: <AddProperty></AddProperty>,
      },
      {
        path: "/all-properties",
        Component: AllProperties,
      },
      { 
        
      },
    ],
  },
]);
export default router;
