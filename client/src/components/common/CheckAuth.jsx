import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticated, user, children }) => {
  //return current url location
  console.log("check auth called");

  const urlLocation = useLocation();
  const redirectAfterLogin = sessionStorage.getItem("redirectAfterLogin");

  // Manage for IF unAuthenticated user with store current url
  if (
    !isAuthenticated &&
    !(
      urlLocation.pathname.includes("/login") ||
      urlLocation.pathname.includes("/sign-up")
    )
  ) {
    sessionStorage.setItem("redirectAfterLogin", urlLocation.pathname);
    return <Navigate to={"/auth/login"} />;
  }

  // Manage for After login unAuthenticated user redirect old url
  if (isAuthenticated && redirectAfterLogin) {
    sessionStorage.removeItem("redirectAfterLogin");
    return <Navigate to={redirectAfterLogin} replace />;
  }

  // IF Authenticated user Access Admin pages
  if (isAuthenticated && urlLocation.pathname.includes("/admin") && user?.role === "user") {
      return <Navigate to={"/"} />;
  }


  // logic for Authenticated admin redirect Admin Pages
  // if(isAuthenticated && user.role === 'admin'){
  //   return <Navigate to={"/admin"} />;
  // }

  // If Authenticated User or Admin To Access Authenticate Pages It Redirect
  if (isAuthenticated && urlLocation.pathname.includes("/auth")) {
    const redirectPath = user?.role === "admin" ? "/admin" : "/";
    return <Navigate to={redirectPath} />;
  }
  

  return <>{children}</>;
};

export default CheckAuth;
