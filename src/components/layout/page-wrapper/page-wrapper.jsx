import React from "react";
import MainPage from "/src/components/pages/main-page";
import { Main } from "./styled";

// Обёртка для контента страниц
function PageWrapper({ children, ...prop }) {
  return (
    <>
      <Main>
        <MainPage {...prop} />
      </Main>
    </>
  );
}

export default PageWrapper;
