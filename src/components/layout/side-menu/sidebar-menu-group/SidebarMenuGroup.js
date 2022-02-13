import  classes  from "./SidebarMenuGroup.module.css";

const SideBarMenuGroup = (props) => {
  return <span className={classes.group}>{props.item.title}</span>;
};

export default SideBarMenuGroup;
