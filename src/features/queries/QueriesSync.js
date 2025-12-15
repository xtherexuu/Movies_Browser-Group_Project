import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router";
import { selectPage, selectSearch, setPage, setSearch } from "./queriesSlice";
import { useEffect, useRef } from "react";
import getNewSearchParams from "../../getNewSearchParams";
import { fetchSearchInputValueFromQueries } from "./SearchInput/searchInputSlice";

export default () => {
  const [urlParams, setUrlParams] = useSearchParams();
  const urlSearch = urlParams.get("s");
  const urlPage = urlParams.get("page");

  const storeSearch = useSelector(selectSearch);
  const storePage = useSelector(selectPage);

  const dispatch = useDispatch();

  const baseParams = new URLSearchParams(urlParams);
  const prevUrlSearch = useRef(null);
  const prevUrlPage = useRef(null);
  const prevStoreSearch = useRef("");
  const prevStorePage = useRef("");

  useEffect(() => {
    if (urlSearch !== prevUrlSearch.current && urlSearch !== storeSearch) {
      dispatch(setSearch(urlSearch));
      dispatch(fetchSearchInputValueFromQueries(urlSearch));
      prevStoreSearch.current = urlSearch;
      prevUrlSearch.current = urlSearch;
      return;
    }
    if (urlPage !== prevUrlPage.current && urlPage !== storePage) {
      dispatch(setPage(urlPage));
      prevStorePage.current = urlPage;
      prevUrlPage.current = urlPage;
      return;
    }
    if (storeSearch !== prevStoreSearch.current && storeSearch !== urlSearch) {
      const nextParams = getNewSearchParams(baseParams, ["s", storeSearch]);
      setUrlParams(nextParams);
      prevStoreSearch.current = storeSearch;
      prevUrlSearch.current = storeSearch;
      return;
    }
    if (storePage !== prevStorePage.current && storePage !== urlPage) {
      const nextParams = getNewSearchParams(baseParams, ["page", storePage]);
      setUrlParams(nextParams);
      prevStorePage.current = storePage;
      prevUrlPage.current = storePage;
      return;
    }
  }, [urlPage, urlSearch, storePage, storeSearch, dispatch, setUrlParams]);
  return null;
};
