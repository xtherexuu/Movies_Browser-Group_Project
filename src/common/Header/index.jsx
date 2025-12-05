import SearchInput from "../../features/SearchInput";
import {
  HeaderContent,
  Heading,
  LinksContainer,
  NavContainer,
  StyledHeader,
  StyledIcon,
  StyledLink,
} from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContent>
        <NavContainer>
          <StyledIcon />
          <Heading>Movies Browser</Heading>
          <LinksContainer>
            <StyledLink to="/">MOVIES</StyledLink>
            <StyledLink to="/people">PEOPLE</StyledLink>
          </LinksContainer>
        </NavContainer>
        <SearchInput />
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
