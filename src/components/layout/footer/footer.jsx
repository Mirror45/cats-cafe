import React from "react";
import Logo from "/src/components/ui/logo/logo";
import { StyledSection, Copyright } from "./styled";

function Footer() {
  return (
    <StyledSection as="footer">
      <Logo />
      <Copyright>Created in 2021</Copyright>
    </StyledSection>
  );
}

export default Footer;
