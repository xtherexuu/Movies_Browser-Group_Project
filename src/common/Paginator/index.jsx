import { useSearchParams } from "react-router";

export default function Paginator({ pagesAmount }) {
  let [searchParams, setSearchParams] = useSearchParams();

  searchParams.get("page");
  return <div>Paginator</div>;
}
