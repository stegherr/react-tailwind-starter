import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import Toggle from "../theme/ThemeToggle";
import NavHeaderProfileMenu from "./nav-header-profile-menu/NavHeaderProfileMenu";

const NavHeader = () => {
  const isSidebarExpanded = useSelector((state) => state.ui.isSidebarExpanded);
  const disPatch = useDispatch();

  const menuClickHandler = () => {
    disPatch(uiActions.toggleExpand());
  };

  return (
    <div
      className={`absolute duration-500 dark:bg-slate-600 top-0 h-12  shadow-xl ${
        isSidebarExpanded
          ? "left-52 w-[calc(100vw_-_13rem)]"
          : "left-0 w-screen"
      }`}
    >
      <div className="relative w-full h-full flex items-center ">
        <div className="inline-flex items-center justify-between w-full mx-3">
          <div className="inline-flex items-center">
            <MenuIcon
              className="cursor-pointer dark:text-gray-50"
              onClick={menuClickHandler}
            ></MenuIcon>
          </div>
          <div className="inline-flex items-center">
            <Toggle></Toggle>
            <NavHeaderProfileMenu></NavHeaderProfileMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
