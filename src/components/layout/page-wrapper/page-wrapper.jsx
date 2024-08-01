import React from "react";
import MainPage from "/src/components/pages/main-page";
import { Main } from "./styled";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";

// Обёртка для контента страниц
function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <MainPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
