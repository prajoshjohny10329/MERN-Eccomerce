import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/auth/UserLogin"
import SignUp from "./pages/auth/UserSignUp"
import AdminLayout from "./components/admin/AdminLayout"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminProducts from "./pages/admin/AdminProducts"
import AdminOrders from "./pages/admin/AdminOrders"
import LandingLayout from "./components/landing/LandingLayout"
import NotFound from "./pages/not-found/NotFound"
import Home from "./pages/landing/Home"
import Account from "./pages/landing/Account"
import Listing from "./pages/landing/Listing"
import Checkout from "./pages/landing/Checkout"
import CheckAuth from "./components/common/CheckAuth"
import { useSelector } from "react-redux"


const App = () => {
  // const isAuthenticated = false;
  // const user  = null;
  // const user = {
  //   name:'hi',
  //   role: 'user'
  // };

  const {isAuthenticated , user} = useSelector(state => state.auth)
  console.log(isAuthenticated , user);
  

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>

        {/* Auth pages  */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        {/* for admin page  */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        {/* for Landing page  */}
        <Route path="/" element={ 
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <LandingLayout />  
          </CheckAuth>
        }>
          <Route path="home" element={<Home />} />
          <Route path="list" element={<Listing />} />
          <Route path="account" element={<Account />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
        {/* for 404 page  */}
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </div>
  )
}

export default App
