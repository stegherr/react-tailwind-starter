import { Fragment } from "react";
import Content from "../content/Content";
import NavHeader from "./nav-header/NavHeader";
import SideMenu from "./side-menu/SideMenu";

const Layout = () => {
  return (
    <div className="relative">
      <SideMenu></SideMenu>
      <NavHeader></NavHeader>
      <Content></Content>
    </div>
  );
};

export default Layout;
