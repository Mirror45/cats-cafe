import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import starList from "/src/mocks/starList";
import { GlobalStyle } from "./styled";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper stars={starList}>Контент страницы</PageWrapper>
    </>
  );
}

