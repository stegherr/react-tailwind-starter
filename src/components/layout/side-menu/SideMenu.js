import { List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";
import sideMenu from "./sideMenuItems";
import SidebarMenuDivider from "./sidebar-menu-divider/SidebarMenuDivider";
import SideBarMenuItem from "./sidebar-menu-item/SidebarMenuItem";
import SideBarMenuGroup from "./sidebar-menu-group/SidebarMenuGroup";
import SidebarMenuCollapsable from "./sidebar-menu-collapsable/SidebarMenuCollapsable";

const SideMenu = () => {
  const menuItems = sideMenu;
  const isSidebarExpanded = useSelector((state) => state.ui.isSidebarExpanded);

  return (
    <div
      className={` duration-500 min-h-screen w-52 bg-slate-900  ${
        isSidebarExpanded ? "w-52 " : "w-0"
      }`}
    >
      <div className="h-12 flex justify-center ">
        <span className="text-5xl text-white font-bold ">LOGO</span>
      </div>
      <div className="flex flex-col justify-between mt-6 mx-3">
        {menuItems.map((item) => {
          switch (item.type) {
            case "collapsable":
              return <SidebarMenuCollapsable key={Math.random()} item={item} />;
            case "group":
              return <SideBarMenuGroup key={Math.random()} item={item} />;
            case "basic":
              return <SideBarMenuItem key={Math.random()} item={item} />;
            case "divider":
              return <SidebarMenuDivider key={Math.random()} item={item} />;
          }
        })}
      </div>
    </div>
  );
};

export default SideMenu;
