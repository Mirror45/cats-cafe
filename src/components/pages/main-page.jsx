import React from "react";
import About from "/src/components/blocks/about/about";
import { TitleLevel } from "/src/components/ui/title/title";

function MainPage({ stars }) {
  return (
    <>
      <About level={TitleLevel.H1} />
    </>
  );
}

export default MainPage;
