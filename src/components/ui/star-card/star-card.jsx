import React from "react";
import Title, { TitleSize, TitleLevel } from "/src/components/ui/title/title";
import { Text, Figure, Image, StyledStarCard, StyledStarIcon } from "./styled";

function StarCard({
  name,    // cat's name
  about,   // information about the cat
  feature, // feature (affectionate, new, etc.) CatFeature
  image    // URL with cat's photo
}) {
  return (
    <StyledStarCard>
      <Figure>
        <Image src={image} width={313} height={320} alt="Cat image" />
        <StyledStarIcon feature={feature} />
      </Figure>
      <Title level={TitleLevel.H3} size={TitleSize.SMALL}>
        {name}
      </Title>
      <Text
        className="star__about"
        dangerouslySetInnerHTML={{ __html: about }}
      />
    </StyledStarCard>
  );
}

export default StarCard;
