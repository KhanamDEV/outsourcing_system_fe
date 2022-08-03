import {Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/password/ForgetPassword";
import ChangePasswordForget from "../pages/password/ChangePasswordForget";

const RouteList = () => {
    return <Routes>
        <Route path={''} element={<HomePage/>} />
        <Route path={'sign-in'} element={<Login />}/>
        <Route path={'forget-password'} element={<ForgetPassword />}/>
        <Route path={'change-password'} element={<ChangePasswordForget />} />
    </Routes>
};

export default RouteList;