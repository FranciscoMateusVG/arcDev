import { makeStyles, Grid, Hidden } from "@material-ui/core";
import { Link } from "react-router-dom";
import footerSlash from "../../../assets/footerSlash.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import instagram from "../../../assets/instagram.svg";
import { useHeaderStore } from "../Header/store";

const Footer = () => {
  const { footer, slash, mainContainer, link, gridItem, icon, logoContainer } =
    useStyles();
  const { linkReference, selectedIndex } = useHeaderStore();

  const geraRotas = () => {
    return footerRoutes.map((routes, indexRouteReference) => (
      <Grid item className={gridItem}>
        <Grid container spacing={2} direction="column">
          {routes.map((route, indexMenuReference) => (
            <Grid
              className={link}
              component={Link}
              onClick={() => {
                linkReference.set(indexRouteReference);
                if (indexRouteReference === 1) {
                  selectedIndex.set(indexMenuReference);
                }
              }}
              to={route.to}
              item
            >
              {route.name}
            </Grid>
          ))}
        </Grid>
      </Grid>
    ));
  };

  const geraLogos = () => {
    return logos.map((logo) => (
      <Grid
        item
        component={"a"}
        href="https://www.google.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img alt={logo.alt} src={logo.img} className={icon} />
      </Grid>
    ));
  };

  return (
    <footer className={footer}>
      <Hidden mdDown>
        <Grid container justifyContent="center" className={mainContainer}>
          {geraRotas()}
        </Grid>
      </Hidden>

      <img
        alt="black decorative slash"
        src={footerSlash}
        className={slash}
      ></img>
      <Grid
        container
        alignContent="bottom"
        className={logoContainer}
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={2}
      >
        {geraLogos()}
      </Grid>
    </footer>
  );
};

export default Footer;

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
  },
  slash: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "10em",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  logoContainer: {
    position: "absolute",
    marginTop: "-4rem",
  },
  gridItem: {
    margin: "3em",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "8,75rem",
    fontWeight: "bold",
    textDecoration: "none",
  },
  icon: {
    height: "3rem",
    width: "3rem",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em",
    },
  },
}));

const logos = [
  { name: "facebook", alt: "facebook logo", img: facebook },
  { name: "twitter", alt: "twitter logo", img: twitter },
  { name: "instragram", alt: "instragram logo", img: instagram },
];

const footerRoutes = [
  [{ name: "Home", to: "/" }],
  [
    {
      name: "Services",
      to: "/services",
    },
    { name: "Custom Software Development", to: "/customsoftware" },
    { name: "Mobile App Development", to: "/mobileapps" },
    { name: "Website Development", to: "/websites" },
  ],
  [
    { name: "The Revolution", to: "/revolution" },
    { name: "Vision", to: "/revolution" },
    { name: "Technology", to: "/revolution" },
    { name: "Process", to: "/revolution" },
  ],
  [
    { name: "About Us", to: "/about" },
    { name: "History", to: "/about" },
    { name: "Team", to: "/about" },
  ],
  [{ name: "Contact Us", to: "/contact" }],
];
