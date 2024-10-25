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
    console.log('user is not');
    
      return <Navigate to={"/"} />;
  }

  // logic for Authenticated User for ignore Admin Pages
  if (isAuthenticated && urlLocation.pathname.includes("/admin")) {
    if (user?.role === "user") {
      console.log("if2");

      return <Navigate to={"/"} />;
    }
  }

  // logic for Authenticated admin redirect Admin Pages
  // if(isAuthenticated && user.role === 'admin'){
  //   return <Navigate to={"/admin"} />;
  // }

  // logic for Authenticated User or admin To access admin redirect own way
  if (
    isAuthenticated &&
    urlLocation.pathname.includes("/auth" || "/auth/login" || "/auth/sign-up")
  ) {
    if (user?.role === "admin") {
      console.log("if3");

      return <Navigate to={"/admin"} />;
    } else {
      console.log("if4");

      return <Navigate to={"/"} />;
    }
  }

  return <>{children}</>;
};

export default CheckAuth;
