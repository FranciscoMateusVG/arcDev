import { accessHeaderStore } from "../store";
import { MenuItem } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Link } from "react-router-dom";

const { linkReference, selectedIndex, openMenu, tabsOptions, menuOptions } =
  accessHeaderStore();

export const handleChange = (e, value) => {
  linkReference.set(value);
};
const handleMouseOver = (e, anchorEl) => {
  anchorEl.current = e.currentTarget;
  openMenu.set(true);
};

const handleMenuItem = (e, i, anchorEl) => {
  anchorEl.current = null;
  openMenu.set(false);
  selectedIndex.set(i);
};

export const geraTabs = (anchorEl, classes) => {
  return tabsOptions.get().map((option, index) => {
    if (option.name === "Free Estimate") return [];
    let servicesProps = {};
    if (option.name === "Services")
      servicesProps = {
        "aria-owns": anchorEl.current ? "simple-menu" : undefined,
        "aria-haspopup": anchorEl.current ? "true" : undefined,
        onMouseOver: (event) => handleMouseOver(event, anchorEl),
      };

    return (
      <Tab
        key={index}
        className={classes.tab}
        component={Link}
        label={option.name}
        to={option.link}
        {...servicesProps}
      />
    );
  });
};

export const handleClose = (e, anchorEl) => {
  anchorEl.current = null;
  openMenu.set(false);
};

export const geraMenu = (anchorEl, classes) => {
  return menuOptions.get().map((option, index) => (
    <MenuItem
      key={index}
      component={Link}
      to={option.link}
      classes={{ root: classes.menuItem, selected: classes.selectedItem }}
      onClick={(event) => {
        handleMenuItem(event, index, anchorEl);
        linkReference.set(1);
        handleClose(null, anchorEl);
      }}
      selected={index === selectedIndex.get() && linkReference.get() === 1}
    >
      {option.name}
    </MenuItem>
  ));
};
