import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import AddUser from "../users/add-user/AddUser";
import Users from "../users/Users";
const Content = (props) => {
  const isSidebarExpanded = useSelector((state) => state.ui.isSidebarExpanded);

  // useEffect(() => {
  //   alert.error("congrats");
  // }, []);

  return (
    <div
      className={`absolute top-12 p-3 md:p-5 ${
        isSidebarExpanded
          ? "left-52 w-[calc(100vw_-_13rem)]"
          : "left-0 w-screen"
      } h-[calc(100vh_-_3rem)] duration-500 bg-slate-100 dark:bg-slate-700`}
    >
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
        <Route path="/users" exact component={Users}></Route>
        <Route path="/users/add" component={AddUser}></Route>
      </Switch>
    </div>
  );
};

export default Content;
