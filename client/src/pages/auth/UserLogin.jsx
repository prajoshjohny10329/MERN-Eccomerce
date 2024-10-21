import CommonForm from "@/components/common/CommonForm";
import loginFormControls from "@/config/loginForm";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const UserLoginPage = () => {
  const [formData, setFormData] = useState(initialState);
  const onSubmit = () => {
    console.log("on Submit called");
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
