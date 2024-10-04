import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/AuthLayout"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import AdminLayout from "./components/admin/AdminLayout"


const App = () => {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>
      <Routes>
        {/* Auth pages  */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} ></Route>
          <Route path="sign-up" element={<SignUp />} ></Route>
        </Route>
        {/* for admin page  */}
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </div>
  )
}

export default App
