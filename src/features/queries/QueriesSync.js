// import { useEffect, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useSearchParams } from "react-router";
// import {
//   fetchInputValueFromQueries,
//   selectPage,
//   selectSearch,
//   setPage,
//   setSearch,
// } from "./queriesSlice";
// import getNewSearchParams from "../../getNewSearchParams";
// const QueriesSync = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const urlSearch = searchParams.get("s") || "";
//   const urlPage = searchParams.get("page") || "1";

//   const search = useSelector(selectSearch) || "";
//   const page = useSelector(selectPage) || "1";

//   const dispatch = useDispatch();

//   const initialRef = useRef(true);
//   const prevUrlSearchRef = useRef(urlSearch);
//   const prevUrlPageRef = useRef(urlPage);
//   const prevSearchRef = useRef(search);
//   const prevPageRef = useRef(page);

//   useEffect(() => {
//     const isInitial = initialRef.current;

//     const prevUrlSearch = prevUrlSearchRef.current;
//     const prevUrlPage = prevUrlPageRef.current;
//     const prevSearch = prevSearchRef.current;
//     const prevPage = prevPageRef.current;

//     const urlChanged =
//       !isInitial && (urlSearch !== prevUrlSearch || urlPage !== prevUrlPage);
//     const storeChanged =
//       !isInitial && (search !== prevSearch || page !== prevPage);

//     if (isInitial) {
//       // URL -> store na starcie
//       if (search !== urlSearch) {
//         dispatch(setSearch(urlSearch));
//         dispatch(fetchInputValueFromQueries(urlSearch));
//       }
//       if (page !== urlPage) {
//         dispatch(setPage(urlPage));
//       }
//     } else if (urlChanged && !storeChanged) {
//       // URL -> store (back/forward, ręczna zmiana paska)
//       if (search !== urlSearch) {
//         dispatch(setSearch(urlSearch));
//         dispatch(fetchInputValueFromQueries(urlSearch));
//       }
//       if (page !== urlPage) {
//         dispatch(setPage(urlPage));
//       }
//     } else if (storeChanged && !urlChanged) {
//       // store -> URL (input/paginator/saga)
//       let params = new URLSearchParams(searchParams);
//       params = getNewSearchParams(params, ["s", search]);
//       params = getNewSearchParams(params, ["page", page]);
//       setSearchParams(params);
//     }

//     initialRef.current = false;
//     prevUrlSearchRef.current = urlSearch;
//     prevUrlPageRef.current = urlPage;
//     prevSearchRef.current = search;
//     prevPageRef.current = page;
//   }, [
//     urlSearch,
//     urlPage,
//     search,
//     page,
//     searchParams,
//     setSearchParams,
//     dispatch,
//   ]);

//   return null;
// };

// export default QueriesSync;

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

  const isInitialRef = useRef(true);
  const prevUrlParams = useRef(urlParams);
  const prevUrlSearch = useRef("");
  const prevUrlPage = useRef("");
  const prevStoreSearch = useRef("");
  const prevStorePage = useRef("1");

  useEffect(() => {
    if (isInitialRef.current) {
      console.log("sTArt");
      if (urlSearch && urlSearch !== storeSearch) {
        dispatch(setSearch(urlSearch));
        dispatch(fetchSearchInputValueFromQueries(urlSearch));
        prevUrlSearch.current = urlSearch;
        prevStoreSearch.current = urlSearch;
      }
      if (urlPage && urlPage !== storePage) {
        dispatch(setPage(urlPage));
        prevStorePage.current = urlPage;
        prevUrlPage.current = urlPage;
      }
      prevUrlParams.current = urlParams;
      isInitialRef.current = false;
    }
    if (!isInitialRef.current) {
      console.log("dWa");
      if (urlSearch !== prevUrlSearch.current && urlSearch !== storeSearch) {
        console.log(1);
        // 1
        dispatch(setSearch(urlSearch));
        dispatch(fetchSearchInputValueFromQueries(urlSearch));
        prevStoreSearch.current = urlSearch;
        prevUrlSearch.current = urlSearch;
      }
      if (urlPage !== prevUrlPage.current && urlPage !== storePage) {
        console.log(2);
        // 2
        dispatch(setPage(urlPage));
        prevStorePage.current = urlPage;
        prevUrlPage.current = urlPage;
      }
      if (
        // !(!storeSearch && prevStoreSearch.current) &&
        storeSearch !== prevStoreSearch.current &&
        storeSearch !== urlSearch
      ) {
        console.log(3, "||", storeSearch, urlSearch, prevStoreSearch.current);
        // 3
        prevUrlParams.current = getNewSearchParams(prevUrlParams.current, [
          "s",
          storeSearch,
        ]);
        setUrlParams(prevUrlParams.current);
        prevStoreSearch.current = storeSearch;
        prevUrlSearch.current = storeSearch;
      }
      if (storePage !== prevStorePage.current && storePage !== urlPage) {
        console.log(4);
        // 4
        prevUrlParams.current = getNewSearchParams(prevUrlParams.current, [
          "page",
          storePage,
        ]);
        setUrlParams(prevUrlParams.current);
        prevStorePage.current = storePage;
        prevUrlPage.current = storePage;
      }
    }
  }, [urlPage, urlSearch, storePage, storeSearch, dispatch, setUrlParams]);
  return null;
};
