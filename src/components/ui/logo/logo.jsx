import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { AppRoute } from "/src/const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styled";
import { useLocation } from "react-router-dom";

function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Cat café</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Cat café</Text>
    </StyledLogo>
  );
}

export default Logo;
