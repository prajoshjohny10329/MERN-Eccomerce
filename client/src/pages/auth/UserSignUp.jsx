import CommonForm from "@/components/common/CommonForm";
import signUpFormControls from "@/config/signUpForm";
import { userSignupThunk } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  phone: ''
};

const UserSignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(userSignupThunk(formData)).then(() =>{
      console.log('finsihed');
      
    })
    console.log("on Submit called");
  };

  console.log(formData);
  
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold -tracking-tight text-foreground">
          Create new Account
        </h1>
        <p className="mt-2 ">
          Already Have an Account
          <Link
            className="font-medium ml-2 text-purple-500 hover:underline"
            to="/auth/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={signUpFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default UserSignUp;
