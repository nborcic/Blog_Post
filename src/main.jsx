import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./assets/Home";
import Calendar from "./assets/Calendar";
import FullCalendarReact from "./assets/FullCalendarReact";
import ErrorElement from "./assets/ErrorElement";

// routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement  />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/calendar", element: <Calendar /> },
      { path: "/fullcalendar", element: <FullCalendarReact /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
