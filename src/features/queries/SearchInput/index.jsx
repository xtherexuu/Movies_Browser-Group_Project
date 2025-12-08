import {
  SearchButton,
  StyledInput,
  StyledInputWrapper,
  StyledLoupeIcon,
} from "./styled";

const SearchInput = () => {
  return (
    <StyledInputWrapper>
      <SearchButton>
        <StyledLoupeIcon />
      </SearchButton>
      <StyledInput placeholder="Search for movies..." />
    </StyledInputWrapper>
  );
};

export default SearchInput;
