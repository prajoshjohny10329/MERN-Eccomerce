import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const CheckAuth = ({ isAuthenticate, user, children }) => {
  //return current url location
  const urlLocation = useLocation();
  console.log('check auth');
  console.log(urlLocation);
  

  // logic for Not Authenticated User for ignore !Authentication Pages
  if (
    !isAuthenticate &&
    !(
      urlLocation.pathname.includes("/login") ||
      urlLocation.pathname.includes("/sign-up") 
      // ||
      // urlLocation.pathname.includes("^/$")
    )
  ) {
    console.log('hi');
    return <Navigate to={"/auth/login"} />;
  }
  // logic for Authenticated User for ignore Admin Pages
  if (isAuthenticate && urlLocation.pathname.includes("/admin")) {
    
    if (user?.role === "user") {
      return <Navigate to={"/"} />;
    }
  }
  // logic for Authenticated User or admin To access admin redirect own way
  if (isAuthenticate && urlLocation.pathname.includes("/auth" || "/auth/login" || "/auth/sign-up")) {
    if (user?.role === "admin") {
        console.log('admin');
        
      return <Navigate to={"/admin"} />;
    }else{
        return <Navigate  to={"/"} />;
    }
  }


  return <>{children}</>
};

export default CheckAuth;
