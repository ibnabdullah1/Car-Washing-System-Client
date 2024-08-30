import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/Dashboard/AddService";
import Dashboard from "../Components/Dashboard/Dashboard";
import Payment from "../Components/Dashboard/Payment";
import Profile from "../Components/Dashboard/Profile";
import Settings from "../Components/Dashboard/Settings";
import DashboardLayout from "../Layout/DashboardLayout";
import MainLayout from "../Layout/MainLayout";
import AboutUsPage from "../pages/About/AboutUsPage";
import ReviewFrom from "../pages/AddReview/AddReview";
import AddServiceSlot from "../pages/AddServiceSlot/AddServiceSlot";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FAQs from "../pages/FAQ/FAQs";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ManageServices from "../pages/ManageServices/ManageServices";
import ManageSlots from "../pages/ManageSlots/ManageSlots";
import ManageUsers from "../pages/ManageUsers/ManageUsers";
import MyBookings from "../pages/MyBookings/MyBookings";
import Team from "../pages/OurTeam/OurTeam";
import ServiceDetails from "../pages/Services/ServiceDetails";
import Services from "../pages/Services/Services";
import SignUp from "../pages/SignUp/SignUp";
import UpdateService from "../pages/UpdateServices/UpdateServices";
import AdminRoute from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/our-team",
        element: <Team />,
      },
      {
        path: "/checkout",
        element: <Payment />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "user-profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      // User Routes
      {
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "add-review",
        element: (
          <PrivateRoute>
            <ReviewFrom />
          </PrivateRoute>
        ),
      },
      // Admin routes
      {
        path: "add-service",
        element: (
          <AdminRoute>
            <AddService />
          </AdminRoute>
        ),
      },
      {
        path: "manage-services",
        element: (
          <AdminRoute>
            <ManageServices />
          </AdminRoute>
        ),
      },
      {
        path: "update-service/:id",
        element: (
          <AdminRoute>
            <UpdateService />
          </AdminRoute>
        ),
      },
      {
        path: "add-service-slot/:id",
        element: (
          <AdminRoute>
            <AddServiceSlot />
          </AdminRoute>
        ),
      },
      {
        path: "manage-slots",
        element: (
          <AdminRoute>
            <ManageSlots />
          </AdminRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);
