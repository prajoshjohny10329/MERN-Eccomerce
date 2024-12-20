import CommonForm from "@/components/common/CommonForm";
import loginFormControls from "@/config/loginForm";
import { useToast } from "@/hooks/use-toast";
import { userLoginThunk } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "@/components/auth/GoogleAuth";

const initialState = {
  email: "",
  password: "",
};

const UserLoginPage = () => {
  console.log("user login page called");

  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(userLoginThunk(formData)).then((data) => {
      const { message, success, user = null } = data.payload;
      console.log(data.payload);

      if (success) {
        toast({
          title: "Success",
          description: message,
          className: "bg-black text-green-500",
        });
      } else {
        toast({
          variant: "destructive",
          title: "Warning",
          description: message,
          className: "bg-black text-red-500",
        });
      }
    });
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

      <GoogleAuth />

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
