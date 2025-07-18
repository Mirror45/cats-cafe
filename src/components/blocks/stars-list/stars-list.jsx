import React from "react";
import Button from "/src/components/ui/button/button";
import Title from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import { StarItem, StarList, StyledStarsList } from "./styled";

function StarsList({ stars, level }) {
  return (
    <StyledStarsList>
      {stars?.length ? (
        <>
          <Title level={level}>Our Stars</Title>
          <StarList $isGridList>
            {stars.map((star) => (
              <StarItem key={star.id}>
                <StarCard {...star} />
              </StarItem>
            ))}
          </StarList>
        </>
      ) : null}
      <Button minWidth={353} link="/buy">
        Buy Ticket
      </Button>
    </StyledStarsList>
  );
}

export default StarsList;
