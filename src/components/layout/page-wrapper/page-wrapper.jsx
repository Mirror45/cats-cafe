import React from "react";
import MainPage from "/src/components/pages/main-page";
import { Main } from "./styled";
import Header from "/src/components/layout/header/header";
// Обёртка для контента страниц
function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage {...prop} />
      </Main>
    </>
  );
}

export default PageWrapper;
