import React, { useState } from "react";
import AccordionItem from "./accordionItem";
import { Ul } from "/src/components/styled";
import { StyledLi } from "./styled";

export function Accordion({
  titleComponent, // component for rendering the title
  textComponent, // component for rendering the text
  content, // array containing the accordion content
  isHtml // whether the text contains HTML
}) {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  return (
    <Ul>
      {content.map((item, index) => (
        <StyledLi key={item.id}>
          <AccordionItem
            titleComponent={titleComponent}
            textComponent={textComponent}
            title={item.title}
            text={item.description}
            open={index === openItemIndex}
            onClick={() => {
              setOpenItemIndex(index !== openItemIndex ? index : null);
            }}
            isHtml={isHtml}
          />
        </StyledLi>
      ))}
    </Ul>
  );
}
