import React, { useState } from "react";
import { Form, Label, Li, Ul } from "/src/components/styled";
import Button from "/src/components/ui/button/button";
import { TitleSize } from "/src/components/ui/title/title";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import { Accordion } from "/src/components/ui/accordion/accordion";
import {
  StyledSection,
  Price,
  AccordionText,
  RadioLabelForTime,
  FormItem,
  StyleTitle,
  RadioLabelForType
 } from "./styled";

 function Buy({ buyOptions: { durationOptions = [], ticketOptions = [] } }) {
  const canBuy = durationOptions.length && ticketOptions.length;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);
  const type = ticketOptions.find((option) => option.id === selectType);
  const price = duration * (type ? type.price : 0);

  // convert ticketOptions into data for the accordion
  const accordionContent = canBuy && ticketOptions.map((option) => ({
    id: option.id,
    title: (
      <RadioButton
        labelComponent={RadioLabelForType}
        selectValue={selectType}
        value={option.id}
        text={option.title}
        onChange={(el) => {
          setSelectType(Number(el.target.value));
        }}
      />
    ),
    description: option.description
  }));

  const handleBuy = () => {
    alert(
      `Thank you for your purchase.
              You have purchased a ticket of class: ${type.title}.
              Visit duration (hours): ${duration}.
              Ticket price: ${price} $.`
    );
  };

  return (
    <StyledSection>
      <StyleTitle level={1} size={TitleSize.BIG}>
        Buy Ticket
      </StyleTitle>
      {canBuy ? (
        <Form $width={540}>
          <FormItem>
            <Label $margin={12}>Duration (hours)</Label>
            <Ul $isGridList $indent={12} $align="left">
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(el) => {
                      setDuration(Number(el.target.value));
                    }}
                  />
                </Li>
              ))}
            </Ul>
          </FormItem>
          <FormItem $bottom={22}>
            <Label $margin={12}>Ticket Type</Label>
            <Accordion
              textComponent={AccordionText}
              content={accordionContent}
              isHtml
            />
          </FormItem>
          <Label $small $margin={6}>
            Price
          </Label>
          <Price>{price} $</Price>
          <Button minWidth={460} onClick={handleBuy}>
            Buy Ticket
          </Button>
        </Form>
      ) : (
        <p>Ticket purchasing is temporarily unavailable</p>
      )}
    </StyledSection>
  );
}

export default Buy;
