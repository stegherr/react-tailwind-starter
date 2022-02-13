import { NavLink  } from "react-router-dom";
import classes from "./SideBarMenuItem.module.css";

const SideBarMenuItem = (props) => {
  return (
    <NavLink exact="true"
      to={props.item.link || "."}
      activeClassName={classes.active}
      className={`${classes["menu-row"]} `}
    >
      <div className="inline-flex items-center">
        <div className={classes.icon}>
          {props.item.icon}
          {/* <mat-icon [svgIcon]="item.icon"></mat-icon> */}
        </div>
        <span className={classes.title}>{props.item.title}</span>
        <div className={classes.expand}></div>
      </div>
    </NavLink>
  );
};

export default SideBarMenuItem;
