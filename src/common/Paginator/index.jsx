import { useSearchParams } from "react-router";
import {
  PaginatorButton,
  PaginatorSite,
  PaginatorText,
  StyledArrowLeft,
  StyledArrowRight,
  StyledPaginator,
} from "./styled";

export const Paginator = ({ pagesAmount }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  let currnetPage = searchParams.get("page");
  return (
    <StyledPaginator>
      <PaginatorButton disabled={currnetPage ? currnetPage === 1 : true}>
        <StyledArrowLeft />
        <StyledArrowLeft $secound />
        {"First"}
      </PaginatorButton>
      <PaginatorButton disabled={currnetPage ? currnetPage === 1 : true}>
        <StyledArrowLeft />
        {"Previous"}
      </PaginatorButton>
      <PaginatorText>
        Page <PaginatorSite as="strong">{currnetPage || 1}</PaginatorSite> of{" "}
        <PaginatorSite as="strong">{pagesAmount}</PaginatorSite>
      </PaginatorText>
      <PaginatorButton disabled={currnetPage === pagesAmount}>
        {"Next"}
        <StyledArrowRight />
      </PaginatorButton>
      <PaginatorButton disabled={currnetPage === pagesAmount}>
        {"Last"}
        <StyledArrowRight />
        <StyledArrowRight $secound />
      </PaginatorButton>
    </StyledPaginator>
  );
};

export default Paginator;
