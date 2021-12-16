import React from "react";
import { Outlet, Navigate } from "react-router-dom";
// import UsersService from "../../../services/users";

const PrivateRoute = ({ component: Component , ...rest }) => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
