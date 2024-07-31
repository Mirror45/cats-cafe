import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";

import { Text, StyledLogo } from "./styled";

// Логотип сайта с названием
function Logo() {
  return (
    <StyledLogo href="/">
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
