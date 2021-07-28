import {
  IconButton,
  List,
  makeStyles,
  SwipeableDrawer,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import { useHeaderStore } from "../store";
import { geraTabs } from "./util";

const Drawer = () => {
  //State
  const { openDrawer } = useHeaderStore();

  //Styles
  const classes = useStyles();

  //Constants
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  //Props
  const swipeableDrawerProps = {
    disableBackdropTransition: !iOS,
    disableDiscovery: iOS,
    open: openDrawer.get(),
    onClose: () => openDrawer.set(false),
    onOpen: () => openDrawer.set(true),
    classes: { paper: classes.drawerStyle },
  };
  const iconButtonProps = {
    className: classes.drawerIconContainer,
    onClick: () => openDrawer.set(!openDrawer.get()),
    disableRipple: true,
  };

  return (
    <>
      <SwipeableDrawer {...swipeableDrawerProps}>
        <List disablePadding>{geraTabs(classes)}</List>
      </SwipeableDrawer>
      <IconButton {...iconButtonProps}>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  drawerStyle: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerIcon: {
    height: "50px",
    width: "50px",
  },
  drawerIconContainer: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "auto",
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
  },
  drawerItemNotSelected: {
    opacity: 0.7,
  },
  drawerItemSelected: {
    opacity: 1,
  },
}));

export default Drawer;
