import {
  SearchButton,
  StyledInput,
  StyledInputWrapper,
  StyledLoupeIcon,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSearchInputValue,
  setSearchInputValue,
} from "./searchInputSlice";
import { useLocation } from "react-router";

const SearchInput = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector(selectSearchInputValue) || "";
  const location = useLocation();

  return (
    <StyledInputWrapper>
      <SearchButton>
        <StyledLoupeIcon />
      </SearchButton>
      <StyledInput
        value={inputValue}
        onChange={(event) => dispatch(setSearchInputValue(event.target.value))}
        placeholder={`Search for ${
          location.pathname.startsWith("/people") ? "People" : "Movies"
        }...`}
      />
    </StyledInputWrapper>
  );
};

export default SearchInput;
