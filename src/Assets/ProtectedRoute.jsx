import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import Spinner from "../Components/Spinner";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const { isAuthenticated, authLoading } = useAuth();

  if (authLoading) {
    return <Spinner />;
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
