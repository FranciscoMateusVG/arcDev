import { accessHeaderStore } from "./store";
import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const { tabsOptions, linkReference, selectedIndex, menuOptions } =
  accessHeaderStore();

export const qualTabEstaSelecionada = (location) => {
  tabsOptions.get().forEach(({ link }, index) => {
    if (location === link && linkReference.get() !== index) {
      console.log("cheguei aqui no " + link);
      linkReference.set(index);
    }
  });

  menuOptions.get().forEach(({ link }, index) => {
    if (location === link && linkReference.get() !== 1) {
      linkReference.set(1);
      selectedIndex.set(index);
    }
  });
};

export function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
