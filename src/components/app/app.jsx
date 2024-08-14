import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
// import starList from "/src/mocks/starList";
import gallery from "/src/mocks/gallery";
import buyOptions from "/src/mocks/buyOptions";
import { GlobalStyle } from "./styled";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper slides={gallery} buyOptions={buyOptions}>Контент страницы</PageWrapper>
    </>
  );
}

