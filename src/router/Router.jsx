import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/SignUp/Register";
import LogIn from "../pages/LogIn/LogIn";
import AddProperty from "../pages/AddProperty/AddProperty";
import AllProperties from "../pages/AllProperties/AllProperties";
import PropertyDetails from "../pages/PropertyDetails/PropertyDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "../pages/Context-Provider/PrivateRoute";

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
        element: <PrivateRoute><AddProperty></AddProperty></PrivateRoute>,
      },
      {
        path: "/all-properties",
        Component: AllProperties,
      },
      { 
        path: "propertyDetails/:id",
        element: <PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>
      },
      {

      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);
export default router;
