import SearchInput from "../../features/SearchInput";
import {
  HeaderContent,
  Heading,
  NavContainer,
  StyledHeader,
  StyledIcon,
  StyledLink,
} from "./styled";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContent>
        <NavContainer>
          <StyledIcon />
          <Heading>Movies Browser</Heading>
          <StyledLink to="/">MOVIES</StyledLink>
          <StyledLink to="/people">PEOPLE</StyledLink>
        </NavContainer>
        <SearchInput />
      </HeaderContent>
    </StyledHeader>
  );
}
