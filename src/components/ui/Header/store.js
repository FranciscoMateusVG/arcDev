import { createState, useState } from "@hookstate/core";
const headerStore = createState({
  linkReference: 0,
  anchorEl: null,
  openMenu: false,
  openDrawer: false,
  selectedIndex: 0,
  menuOptions: [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ],
  tabsOptions: [
    { name: "Home", link: "/" },
    {
      name: "Services",
      link: "/services",
    },
    { name: "The Revolution", link: "/revolution" },
    { name: "About Us", link: "/about" },

    { name: "Contact Us", link: "/contact" },
    { name: "Free Estimate", link: "/estimate" },
  ],
});

// The following 2 functions can be exported now:
export const accessHeaderStore = () => headerStore;
export const useHeaderStore = () => useState(headerStore);
