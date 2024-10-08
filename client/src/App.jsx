import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import AdminLayout from "./components/admin/AdminLayout"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminProducts from "./pages/admin/AdminProducts"
import AdminOrders from "./pages/admin/AdminOrders"
import LandingLayout from "./components/landing/LandingLayout"
import NotFound from "./pages/not-found/NotFound"


const App = () => {

  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <Routes>
        {/* Auth pages  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} ></Route>
          <Route path="sign-up" element={<SignUp />} ></Route>
        </Route>
        {/* for admin page  */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
        {/* for Landing page  */}
        <Route path="/" element={<LandingLayout />} ></Route>
        {/* for 404 page  */}
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </div>
  )
}

export default App
