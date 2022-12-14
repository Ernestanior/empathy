import { FC } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "@/pages/login";
import Register from "@/pages/register";
import Home from "@/pages/home";
import Customer from "@/pages/customer";
import Profile from "@/pages/profile";
import LayoutPlx from "../common/layout";

/**
 * 项目路由组件
 * 可以在此根据用户相应的权限组装路由
 * @constructor
 */
const ProjectRouter: FC = () => {
  // const accountInfo = useAccountInfo();

  // if (!accountInfo) {
  //   return <Login />;
  // }

  return (
    <BrowserRouter>
      <LayoutPlx>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/profile" element={<Profile />} />
          <Route index element={<Home />} />
        </Routes>
      </LayoutPlx>
    </BrowserRouter>
  );
};

export default ProjectRouter;
