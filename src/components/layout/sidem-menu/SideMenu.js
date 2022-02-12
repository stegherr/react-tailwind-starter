import { useSelector } from "react-redux";

const SideMenu = () => {
  const isSidebarExpanded = useSelector((state) => state.ui.isSidebarExpanded);

  return (
    <div
      className={` duration-500 min-h-screen w-52 bg-slate-800  ${
        isSidebarExpanded ? "w-52 " : "w-0"
      }`}
    ></div>
  );
};

export default SideMenu;
