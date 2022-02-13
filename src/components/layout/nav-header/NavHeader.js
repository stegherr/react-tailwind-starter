import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../../store/ui-slice";
import Toggle from "../theme/ThemeToggle";

const NavHeader = () => {
  const isSidebarExpanded = useSelector((state) => state.ui.isSidebarExpanded);
  const disPatch = useDispatch();

  const menuClickHandler = () => {
    disPatch(uiActions.toggleExpand());
  };

  return (
    <div
      className={`absolute duration-500 top-0 h-12  shadow-xl ${
        isSidebarExpanded
          ? "left-52 w-[calc(100vw_-_13rem)]"
          : "left-0 w-screen"
      }`}
    >
      <div className="relative w-full h-full flex items-center ">
        <div className="inline-flex items-center justify-between w-full mx-3">
          <MenuIcon
            className="cursor-pointer"
            onClick={menuClickHandler}
          ></MenuIcon>
          <Toggle></Toggle>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
