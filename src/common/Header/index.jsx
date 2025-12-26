import SearchInput from "../SearchInput";
import {
  HeaderContent,
  Heading,
  HeadingLinkContainer,
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
          <HeadingLinkContainer to="/">
            <StyledIcon />
            <Heading>Movies Browser</Heading>
          </HeadingLinkContainer>
          <LinksContainer>
            <StyledLink to="/movies">MOVIES</StyledLink>
            <StyledLink to="/people">PEOPLE</StyledLink>
          </LinksContainer>
        </NavContainer>
        <SearchInput />
      </HeaderContent>
    </StyledHeader>
  );
};

export default Header;
