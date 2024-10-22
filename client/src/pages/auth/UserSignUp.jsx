import CommonForm from "@/components/common/CommonForm";
import signUpFormControls from "@/config/signUpForm";
import { userSignupThunk } from "@/store/auth-slice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast"


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
  const { toast } = useToast()

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(userSignupThunk(formData)).then((data) =>{
      const {message, success, user = null}  =  data.payload
      console.log(success);

      if(success){
          toast({
            title: "Success",
            description: message,
            className: 'bg-black text-green-500'
          })
      }else{
        toast({
          variant: "destructive",
          title: "Warning",
          description: message,
          className: "bg-black text-red-500",
        })
      }
      
      console.log('userSignupThunk finished');

      
    })
    console.log("on Submit called");
  };

  
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
