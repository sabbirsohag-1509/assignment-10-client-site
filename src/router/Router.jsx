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
import MyProperties from "../pages/MyProperties/MyProperties";
import UpdateProperties from "../pages/UpdateProperties/UpdateProperties";
import MyRatings from "../pages/MyRatings/MyRatings";
import AboutUs from "../components/Footer/AboutUs/AboutUs";
import TermsCondition from "../components/Footer/TermsCondition/TermsCondition";
import PrivacyPolicy from "../components/Footer/PrivacyPolicy/PrivacyPolicy";
import BlogDetails from "../pages/Home/LatestBlogs/BlogDetails";
import AllBlogs from "../pages/Home/LatestBlogs/Blogs/Blogs";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import DashboardLayout from "../layout/DashboardLayout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import Profile from "../components/Profile/Profile";
import ProfileEdit from "../components/Profile/EditProfile/EditProfile";
import Settings from "../components/Settings/Settings";

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
        path: "/all-properties",
        Component: AllProperties,
      },
      { 
        path: "propertyDetails/:id",
        element: <PropertyDetails></PropertyDetails>
      },
      {
        path: "/update-properties/:id",
        element: <UpdateProperties></UpdateProperties>
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/terms-and-conditions",
        element: <TermsCondition></TermsCondition>
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy></PrivacyPolicy>
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>
      },
      {
        path: "/blogs",
        element:<AllBlogs></AllBlogs>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/about",
        element:<About></About>
      },
      {
        path: "/contact",
        element:<Contact></Contact>
      },
      {
        path: "/blog",
        element:<AllBlogs></AllBlogs>,
      },
      {
        path: "/dashboard/profile-edit",
        element: <ProfileEdit></ProfileEdit>
      },
      {
        path: "/dashboard/settings",
        element: <Settings></Settings>
      }
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [ 
      {
        path: "/dashboard/my-properties",
        element: <PrivateRoute><MyProperties></MyProperties></PrivateRoute>,
      },
      { 
        path: "/dashboard/add-property",
        element: <PrivateRoute><AddProperty></AddProperty></PrivateRoute>,
      },
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "/dashboard/my-ratings",
        element: <PrivateRoute><MyRatings></MyRatings></PrivateRoute>
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>
      }
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
]);
export default router;
