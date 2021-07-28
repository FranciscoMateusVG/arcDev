import Button from "@material-ui/core/Button";
import logo from "../../../../assets/logo.svg";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { useHeaderStore } from "../store";

const Logo = () => {
  const { logoProp, logoContainer } = useStyles();
  const { linkReference } = useHeaderStore();

  const buttonProps = {
    className: logoContainer,
    component: Link,
    to: "/",
    onClick: () => linkReference.set(0),
    disableRipple: true,
  };

  return (
    <>
      <Button {...buttonProps}>
        <img alt="company logo" src={logo} className={logoProp}></img>
      </Button>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  logoProp: {
    height: "7em",
    "&:hover": {
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      height: "6em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5em",
    },
  },
  logoContainer: {
    padding: 0,
  },
}));

export default Logo;
