import {
  ButtonText,
  PaginatorButton,
  PaginatorSite,
  PaginatorText,
  StyledArrowLeft,
  StyledArrowRight,
  StyledPaginator,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, setPage } from "../../features/queries/queriesSlice";

export const Paginator = ({ pagesAmount }) => {
  const dispatch = useDispatch();
  const page = Number(useSelector(selectPage) || 1);

  const isFirst = page <= 1;
  const isLast = page >= pagesAmount;

  return (
    <StyledPaginator>
      <PaginatorButton
        onClick={() => dispatch(setPage("1"))}
        disabled={isFirst}
      >
        <StyledArrowLeft />
        <StyledArrowLeft $secound />
        <ButtonText>First</ButtonText>
      </PaginatorButton>
      <PaginatorButton
        onClick={() => dispatch(setPage(String(page - 1)))}
        disabled={isFirst}
      >
        <StyledArrowLeft />
        <ButtonText>Previous</ButtonText>
      </PaginatorButton>
      <PaginatorText>
        Page <PaginatorSite as="strong">{page}</PaginatorSite> of{" "}
        <PaginatorSite as="strong">{pagesAmount}</PaginatorSite>
      </PaginatorText>
      <PaginatorButton
        onClick={() => dispatch(setPage(String(page + 1)))}
        disabled={isLast}
      >
        <ButtonText>Next</ButtonText>
        <StyledArrowRight />
      </PaginatorButton>
      <PaginatorButton
        onClick={() => dispatch(setPage(String(pagesAmount)))}
        disabled={isLast}
      >
        <ButtonText>Last</ButtonText>
        <StyledArrowRight />
        <StyledArrowRight $secound />
      </PaginatorButton>
    </StyledPaginator>
  );
};

export default Paginator;
