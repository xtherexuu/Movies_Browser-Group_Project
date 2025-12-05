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
import getNewSearchParams from "../../getNewSearchParams";

export const Paginator = ({ pagesAmount }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  let currnetPage = searchParams.get("page");
  return (
    <StyledPaginator>
      <PaginatorButton
        onClick={() => {
          setSearchParams(getNewSearchParams(searchParams, ["page", "1"]));
        }}
        disabled={currnetPage ? +currnetPage === 1 : true}
      >
        <StyledArrowLeft />
        <StyledArrowLeft $secound />
        <ButtonText>First</ButtonText>
      </PaginatorButton>
      <PaginatorButton
        onClick={() => {
          setSearchParams(
            getNewSearchParams(searchParams, ["page", `${+currnetPage - 1}`])
          );
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
          setSearchParams(
            getNewSearchParams(searchParams, ["page", `${+currnetPage + 1}`])
          );
        }}
        disabled={+currnetPage === +pagesAmount}
      >
        <ButtonText>Next</ButtonText>
        <StyledArrowRight />
      </PaginatorButton>
      <PaginatorButton
        onClick={() => {
          setSearchParams(
            getNewSearchParams(searchParams, ["page", `${pagesAmount}`])
          );
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
