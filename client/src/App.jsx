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
import { useDispatch, useSelector } from "react-redux"
import { userAuthThunk } from "./store/auth-slice"
import { useEffect } from "react"



const App = () => {
  
  console.log('app called');
  const {isAuthenticated , user, isLoading } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(userAuthThunk())
  
  }, [dispatch])
  if (isLoading) {
    // Optionally show a loading spinner or placeholder here
    return <div>Loading...</div>;
  }
  
  
  
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* Auth pages  */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>

        {/* for admin page  */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>

        {/* for Landing page  */}
        <Route
          path="/"
          element={
            <LandingLayout />

            // <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            //   <LandingLayout />
            // </CheckAuth>
          }
        >
          <Route path="home" element={<Home />} />
          <Route
            path="list"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Listing />
              </CheckAuth>
            }
          />

          <Route
            path="account"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Account />
              </CheckAuth>
            }
          />

          <Route
            path="checkout"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <Checkout />
              </CheckAuth>
            }
          />
        </Route>
        {/* for 404 page  */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App
