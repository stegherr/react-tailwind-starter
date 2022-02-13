import { Fragment, useState } from "react";
import classes from "./SidebarMenuCollapsable.module.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import SidebarMenuDivider from "../sidebar-menu-divider/SidebarMenuDivider";
import SideBarMenuItem from "../sidebar-menu-item/SidebarMenuItem";
import SideBarMenuGroup from "../sidebar-menu-group/SidebarMenuGroup";

const SidebarMenuCollapsable = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const expandClickHandler = (props) => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Fragment>
      <a
        onClick={expandClickHandler}
        className={`${classes["menu-row"]} ${classes["text-decoration-none"]}`}
      >
        <div className={classes.icon}>{props.item.icon}</div>
        <span className={classes.title}>{props.item.title}</span>
        <div className={classes.expand}>
          {isExpanded ? (
            <ExpandLessIcon></ExpandLessIcon>
          ) : (
            <ExpandMoreIcon></ExpandMoreIcon>
          )}
        </div>
      </a>
      <div
        className={`mx-3 ${isExpanded ? classes.expand : classes.collapsed}`}
      >
        {props.item.children.map((item) => {
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
    </Fragment>
  );
};

export default SidebarMenuCollapsable;
