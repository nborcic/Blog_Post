import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Components/Home";
import Calendar from "./Components/Calendar";
import FullCalendarReact from "./Components/FullCalendarReact";
import ErrorElement from "./Components/ErrorElement";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard";
import AuthProvider from "../src/Assets/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/fullcalendar", element: <FullCalendarReact /> },
    ],
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,

    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
