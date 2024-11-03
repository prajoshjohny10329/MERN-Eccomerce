import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import GoogleButton from "react-google-button";

const GoogleAuth = () => {
    const handleSuccess = (credentialResponse) => {
        const token = credentialResponse.credential;
    
      };
      const handleError = () => {
        console.log('Login Failed');
      };

  return (
    <div className="flex justify-center">
      <GoogleLogin onSuccess={handleSuccess}
        onError={handleError} />
    </div>
  );
};

export default GoogleAuth;
