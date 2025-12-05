import React from "react";
import {
  SearchButton,
  StyledInput,
  StyledInputWrapper,
  StyledLoupeIcon,
} from "./styled";

export default function SearchInput() {
  return (
    <StyledInputWrapper>
      <SearchButton>
        <StyledLoupeIcon />
      </SearchButton>
      <StyledInput placeholder="Search for movies..." />
    </StyledInputWrapper>
  );
}
