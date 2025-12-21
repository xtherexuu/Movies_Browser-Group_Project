import { useLocation, useNavigate, useSearchParams } from "react-router";
import {
  SearchButton,
  StyledInput,
  StyledInputWrapper,
  StyledLoupeIcon,
} from "./styled";
import getNewSearchParams from "../../getNewSearchParams";
import { useEffect, useRef, useState } from "react";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isAfterInputChange = useRef(false);

  useEffect(() => {
    if (isAfterInputChange.current) {
      isAfterInputChange.current = false;
      const id = window.setTimeout(() => {
        let newSearchParams = getNewSearchParams(searchParams, [
          "search",
          inputValue,
        ]);
        newSearchParams.set("page", "1");
        if (pathname && pathname.split("/").length > 2) {
          navigate(
            `${pathname
              .split("/")
              .slice(0, 2)
              .join("/")}?${newSearchParams.toString()}`
          );
        } else {
          setSearchParams(newSearchParams);
        }
      }, 700);

      return () => window.clearTimeout(id);
    } else {
      return;
    }
  }, [inputValue, setInputValue]);

  useEffect(() => {
    const searchQuery = searchParams.get("search");
    if (searchQuery && !inputValue) {
      setInputValue(searchQuery);
    }
  }, [searchParams, setSearchParams]);

  return (
    <StyledInputWrapper>
      <SearchButton>
        <StyledLoupeIcon />
      </SearchButton>
      <StyledInput
        value={inputValue}
        onChange={({ target }) => {
          isAfterInputChange.current = true;
          setInputValue(target.value);
        }}
        placeholder={`Search for ${pathname.split("/")[1] || "movies"}...`}
      />
    </StyledInputWrapper>
  );
};

export default SearchInput;
