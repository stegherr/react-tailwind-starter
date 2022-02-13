import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const sideMenu = [
  {
    title: "Home",
    type: "group",
  },
  {
    title: "Dashboard",
    type: "basic",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Profile",
    type: "basic",
    icon: <PersonIcon />,
    link: "profile",
  },
  {
    title: "",
    type: "divider",
  },
  {
    title: "Users",
    type: "collapsable",
    icon: <PeopleIcon />,
    children: [
      {
        title: "Add User",
        type: "basic",
        icon: <PersonAddIcon />,
        link:'/users/add'
      },
      {
        title: "All Users",
        type: "basic",
        icon: <PeopleIcon />,
        link:'/users'
      },
    ],
  },
  {
    title: "Dashboard",
    type: "basic",
    icon: <HomeIcon />,
    link:'/dashboard2'
  },
  {
    title: "Profile",
    type: "basic",
    icon: <PeopleIcon />,
    link:'/profile2'
  },
  {
    title: "",
    type: "divider",
  },
];
export default sideMenu;
