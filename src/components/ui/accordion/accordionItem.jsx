import React, { useState, useEffect, useRef } from "react";
import { Button, Arrow, ContentWrapper, TitleWrapper, Wrapper } from "./styled";

function AccordionItem({
  titleComponent, // component to be used for rendering the title
  title, // title content
  text, // text content
  open, // whether the item is open
  textComponent, // component to be used for rendering the text
  onClick, // click handler for accordion toggle button
  isHtml // whether the text is HTML markup
}) {
  const [height, setHeight] = useState(0);
  const TitleComponent = titleComponent;
  const TextComponent = textComponent || "div";
  const contentWrapper = useRef(null);

  useEffect(() => {
    setHeight(contentWrapper.current.offsetHeight);
  }, [text]);

  return (
    <>
      <TitleWrapper open={open}>
        {TitleComponent ? <TitleComponent>{title}</TitleComponent> : title}
        <Button
          type="button"
          onClick={onClick}
          title={`${open ? "Hide" : "Show"} description`}
        >
          <Arrow open={open} />
        </Button>
      </TitleWrapper>
      <Wrapper height={height} open={open}>
        <ContentWrapper ref={contentWrapper}>
          {" "}
          {isHtml ? (
            <TextComponent dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <TextComponent>{text}</TextComponent>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default AccordionItem;
