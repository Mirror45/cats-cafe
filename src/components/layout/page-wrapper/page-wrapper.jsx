import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import BuyPage from "/src/components/pages/buy-page/buy-page";
import { Main } from "./styled";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <BuyPage {...prop} />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
