import { ListItem, ListItemText } from "@material-ui/core";
import { accessHeaderStore } from "../store";
import { Link } from "react-router-dom";

const { linkReference, openDrawer, tabsOptions } = accessHeaderStore();

export const geraTabs = (classes) => {
  return tabsOptions.get().map((option, index) => (
    <ListItem
      onClick={() => {
        openDrawer.set(false);
        linkReference.set(index);
      }}
      className={
        option.name === "Free Estimate"
          ? [classes.drawerItem, classes.drawerItemEstimate]
          : classes.drawerItem
      }
      key={index}
      divider
      button
      component={Link}
      to={option.link}
      selected={linkReference.get() === index}
    >
      <ListItemText
        className={
          linkReference.get() === index
            ? classes.drawerItemSelected
            : classes.drawerItemNotSelected
        }
        disableTypography
      >
        {option.name}
      </ListItemText>
    </ListItem>
  ));
};
