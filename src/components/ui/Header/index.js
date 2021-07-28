import { useEffect } from "react";
import { useTheme, useMediaQuery, AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useHeaderStore } from "./store";
import Drawer from "./Drawer";
import Logo from "./Logo";
import TopMenu from "./TopMenu";
import { ElevationScroll, qualTabEstaSelecionada } from "./util";

const Header = () => {
  //State
  const { tabsOptions, linkReference, selectedIndex, menuOptions } =
    useHeaderStore();

  //Styles
  const { toolbarMargin } = useStyles();

  //Media Query Controll
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const location = window.location.pathname;
    qualTabEstaSelecionada(location);
  }, [menuOptions, tabsOptions, linkReference, selectedIndex]);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Logo />
            {matches ? <Drawer /> : <TopMenu />}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={toolbarMargin} />
    </>
  );
};

export default Header;

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "2em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0.8em",
    },
  },
}));
