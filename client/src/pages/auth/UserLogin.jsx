import CommonForm from "@/components/common/CommonForm";
import loginFormControls from "@/config/loginForm";
import { userLoginThunk } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const UserLoginPage = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault()
    console.log("on Submit called");
    dispatch(userLoginThunk(formData)).then((data) =>{
      console.log(data);
      
    })

  };
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold -tracking-tight text-foreground">
          Login Your Account
        </h1>
        <p className="mt-2 ">
          Create a New Account
          <Link
            className="font-medium ml-2 text-purple-500 hover:underline"
            to="/auth/sign-up"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default UserLoginPage;
