import { useRef } from "react";
import { Button, makeStyles, Menu, Tabs } from "@material-ui/core";
import { useHeaderStore } from "../store";
import { geraMenu, geraTabs, handleChange, handleClose } from "./util";

const TopMenu = () => {
  //States
  const anchorEl = useRef(null);
  const { linkReference, openMenu } = useHeaderStore();

  //Styles
  const classes = useStyles();

  //Props
  const tabsProps = {
    value: linkReference.get(),
    className: classes.tabContainer,
    onChange: handleChange,
    indicatorColor: "primary",
  };

  const buttonProps = {
    variant: "contained",
    color: "secondary",
    className: classes.button,
  };

  const menuProps = {
    id: "simple-menu",
    anchorEl: anchorEl.current,
    open: openMenu.get(),
    classes: { paper: classes.menu, list: classes.menuList },
    elevation: 0,
    MenuListProps: { onMouseLeave: (e) => handleClose(e, anchorEl) },
  };

  return (
    <>
      <Tabs {...tabsProps}>{geraTabs(anchorEl, classes)}</Tabs>
      <Button {...buttonProps}>Free Estimate</Button>
      <Menu {...menuProps}>{geraMenu(anchorEl, classes)}</Menu>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  menuList: {
    paddingBottom: "0px",
  },
  selectedItem: {
    backgroundColor: "black !important",
    color: "white",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px ",
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "30px",
    marginRight: "25px",
    height: "45px",
  },
}));

export default TopMenu;
