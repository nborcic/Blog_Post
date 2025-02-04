import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Components/Home";
import ProtectedRoute from "./Assets/ProtectedRoute";
import EventList from "./Components/EventList";
import FullCalendarReact from "./Components/FullCalendarReact";
import ErrorElement from "./Components/ErrorElement";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import AuthProvider from "../src/Assets/AuthProvider";
import { Flowbite } from "flowbite-react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Dashboard /> },
          { path: "fullCalendar", element: <FullCalendarReact /> },
          { path: "eventList", element: <EventList /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Flowbite>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Flowbite>
  </AuthProvider>
);
