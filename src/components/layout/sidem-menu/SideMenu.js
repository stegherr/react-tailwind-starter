import { List, ListItem, ListItemText } from "@mui/material";
import { useSelector } from "react-redux";

const SideMenu = () => {
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
      <List disablePadding dense className="text-slate-50">
        <ListItem button>
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Billing</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemText>Settings</ListItemText>
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;
