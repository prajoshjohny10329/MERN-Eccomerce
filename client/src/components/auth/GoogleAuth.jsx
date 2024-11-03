import { googleAuthThunk } from "@/store/auth-slice";
import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import GoogleButton from "react-google-button";
import { useDispatch } from "react-redux";

const GoogleAuth = () => {
    const dispatch = useDispatch()

    const handleSuccess = async (credentialResponse) => {
        const token = await credentialResponse.credential;
        dispatch(googleAuthThunk(token)).then((data)=>{
          console.log('response from server');
          
        })
    
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
