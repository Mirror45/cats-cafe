import { Link } from 'react-router-dom';
import { AppRoute } from "/src/const";
import { TitleSize } from "/src/components/ui/title/title";
import { StyledSection, StyledWrapper, StyleTitle } from "./styled";

function NotFoundPage() {
  return (
    <StyledSection>
      <StyledWrapper>
        <StyleTitle level={1} size={TitleSize.BIG}>404 Page not found</StyleTitle>
        <Link to={AppRoute.MAIN}>Вернуться на главную</Link>
      </StyledWrapper>
    </StyledSection>
  );
}
export default NotFoundPage;
