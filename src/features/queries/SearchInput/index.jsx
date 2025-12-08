import { useEffect, useState } from "react";
import {
  SearchButton,
  StyledInput,
  StyledInputWrapper,
  StyledLoupeIcon,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectSearch, setSearchInputValue } from "../queriesSlice";
import { useLocation, useSearchParams } from "react-router";
import getNewSearchParams from "../../../getNewSearchParams";

const SearchInput = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const [inputValue, setInputValue] = useState(search);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const searchQuery = searchParams.get("s");
    if (searchQuery) {
      setInputValue(searchQuery);
    }
  }, [searchParams]);

  useEffect(() => {
    dispatch(setSearchInputValue(inputValue));
  }, [inputValue]);

  useEffect(() => {
    if (search === "" && searchParams.get("s")) {
      setSearchParams(getNewSearchParams(searchParams, ["s", null]));
    } else if (search !== "") {
      setSearchParams(getNewSearchParams(searchParams, ["s", search]));
    }
  }, [search]);

  return (
    <StyledInputWrapper>
      <SearchButton>
        <StyledLoupeIcon />
      </SearchButton>
      <StyledInput
        value={inputValue}
        onChange={({ target }) => {
          setInputValue(target.value);
        }}
        placeholder={`Search for ${
          location.pathname.startsWith("/people") ? "People" : "Movies"
        }...`}
      />
    </StyledInputWrapper>
  );
};

export default SearchInput;
