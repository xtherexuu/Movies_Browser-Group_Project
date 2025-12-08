import { useSearchParams } from "react-router";
import {
  ButtonText,
  PaginatorButton,
  PaginatorSite,
  PaginatorText,
  StyledArrowLeft,
  StyledArrowRight,
  StyledPaginator,
} from "./styled";
import getNewSearchParams from "../../../getNewSearchParams";
import { useDispatch } from "react-redux";
import { setPage } from "../queriesSlice";
import { useEffect } from "react";

export const Paginator = ({ pagesAmount }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let currnetPage = searchParams.get("page");
  const dispatch = useDispatch();

  useEffect(() => {
    const pageQuery = searchParams.get("page");
    if (pageQuery) {
      dispatch(setPage(pageQuery));
    }
  }, []);

  function onButtonClick([key, value]) {
    setSearchParams(getNewSearchParams(searchParams, [key, value]));
    dispatch(setPage(value));
  }

  return (
    <StyledPaginator>
      <PaginatorButton
        onClick={() => {
          onButtonClick(["page", "1"]);
        }}
        disabled={currnetPage ? +currnetPage === 1 : true}
      >
        <StyledArrowLeft />
        <StyledArrowLeft $secound />
        <ButtonText>First</ButtonText>
      </PaginatorButton>
      <PaginatorButton
        onClick={() => {
          onButtonClick(["page", `${+currnetPage - 1}`]);
        }}
        disabled={currnetPage ? +currnetPage === 1 : true}
      >
        <StyledArrowLeft />
        <ButtonText>Previous</ButtonText>
      </PaginatorButton>
      <PaginatorText>
        Page <PaginatorSite as="strong">{currnetPage || 1}</PaginatorSite> of{" "}
        <PaginatorSite as="strong">{pagesAmount}</PaginatorSite>
      </PaginatorText>
      <PaginatorButton
        onClick={() => {
          onButtonClick(["page", `${(+currnetPage || 1) + 1}`]);
        }}
        disabled={+currnetPage === +pagesAmount}
      >
        <ButtonText>Next</ButtonText>
        <StyledArrowRight />
      </PaginatorButton>
      <PaginatorButton
        onClick={() => {
          onButtonClick(["page", `${pagesAmount}`]);
        }}
        disabled={+currnetPage === +pagesAmount}
      >
        <ButtonText>Last</ButtonText>
        <StyledArrowRight />
        <StyledArrowRight $secound />
      </PaginatorButton>
    </StyledPaginator>
  );
};

export default Paginator;
