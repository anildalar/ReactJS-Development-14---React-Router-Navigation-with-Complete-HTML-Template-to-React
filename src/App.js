import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import AccountManagerDashboard from "./pages/account_manager/AccountManagerDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import EndUserDashboard from "./pages/enduser/EndUserDashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import ResellerDashboard from "./pages/reseller/ResellerDashboard";


export default function App() {
    const token = localStorage.getItem('token');

    if(!token) {
      return <Login />
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="admindashboard" element={<AdminDashboard />}></Route>
                    <Route path="enduserdashboard" element={<EndUserDashboard />}></Route>
                    <Route path="resellerdashboard" element={<ResellerDashboard />}></Route>
                    <Route path="accountmanagerdashboard" element={<AccountManagerDashboard />}></Route>
                </Route>
                <Route path="login" element={<Login />}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
  )
}
