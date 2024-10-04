import { Route, Routes } from "react-router-dom"
import AuthLayout from "./components/auth/Layout"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"


const App = () => {

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>Header Component</h1>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} ></Route>
          <Route path="sign-up" element={<SignUp />} ></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
