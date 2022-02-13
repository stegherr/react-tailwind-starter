import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";

const Content = (props) => {
  const isSidebarExpanded = useSelector((state) => state.ui.isSidebarExpanded);

  // useEffect(() => {
  //   alert.error("congrats");
  // }, []);

  return (
    <div
      className={`absolute top-12 p-3 ${
        isSidebarExpanded
          ? "left-52 w-[calc(100vw_-_13rem)]"
          : "left-0 w-screen"
      } h-[calc(100vh_-_3rem)] duration-500 bg-slate-100 dark:bg-slate-700`}
    >
      <h1>Content goes here</h1>
    </div>
  );
};

export default Content;
