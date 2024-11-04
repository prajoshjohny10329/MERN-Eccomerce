create client with vite
Shad cn setup
TailWind Config
Remove Strict Mode 
Add redux
Add Auth Slice
Authentication Page
    Login
    Sign
Admin Page and Components
    Dashboard
    Orders
    Products
        Header
        SideBar
        AdminLayout
User Page and Components
    Home
    List
    Account
    Checkout
404 Page and Components

CheckAuth
    user is authenticate
    Authenticated User for ignore Authentication Pages
    Authenticated User To access admin Pages

Add Dynamic Forms
    signUpFormControls for require inputs
    CommonForm For input type assign
    
Add react-toastify

ADD login Signup Api 
    Server side
        add app.use for auth routs for deviation
        Give server side localhost in cross origin
    FrontEnd
        on submit prevent default
        dispatch userLoginThunk and userSignupThunk with form data
        Thunk Function will call actual server api

Add userCheckAuth for session 
    Frontend
        *userAuthThunk .asyncThunk
        *addCase .extra reducers for handling  asyncThunk
        *dispatch .import userAuthMiddleware app for run all time
    BACKEND
        */check-auth        . 
        *userAuthMiddleware .for handling middleware functions then return call rout

Login with Google
    Frontend
        *if you are using vite .env file variables start with VITE_ and
        *if you are using vite import .env  variables import.meta.env, process.env not working
        *Add credential in google api and services
        *npm install @react-oauth/google 
        *use GoogleOAuthProvider with google client ID
    Backend
        *npm install google-auth-library
        *jwt, create new user userFrom : "Google"
Sheet Component 
    




        




@reduxjs/toolkit axios react-router-dom