// import { useEffect, useRef } from "react";
// import { useLocation } from "react-router";
// import { useDispatch } from "react-redux";
// import { setPath, setSection } from "./routeSlice";
// import {
//   setPage,
//   setSearch,
//   setSearchInputValue,
// } from "../queries/queriesSlice";

import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { setCategory, setPath } from "./routeSlice";

// const RouteSync = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const prevPathRef = useRef(null);

//   useEffect(() => {
//     const { pathname } = location;
//     if (pathname !== prevPathRef.current) {
//       // zapisz ścieżkę
//       dispatch(setPath(pathname));

//       // ustaw sekcję tylko na listach
//       if (pathname === "/movies" || pathname === "/") {
//         dispatch(setSection("movies"));
//       } else if (pathname === "/people") {
//         dispatch(setSection("people"));
//       } else {
//         dispatch(setSection(null));
//         dispatch(setSearch(""));
//         dispatch(setSearchInputValue(""));
//         dispatch(setPage("1"));
//       }

//       prevPathRef.current = pathname;
//     }
//   }, [location.pathname, dispatch]);

//   return null;
// };

// export default RouteSync;

export default () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(null);
  const prevCategory = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      dispatch(setPath(pathname));
      prevPathname.current = pathname;
      if (
        (pathname.startsWith("/movies") || pathname === "/") &&
        prevCategory.current !== "movies"
      ) {
        dispatch(setCategory("movies"));
        prevCategory.current = "movies";
      } else if (
        pathname.startsWith("/people") &&
        prevCategory.current !== "people"
      ) {
        dispatch(setCategory("people"));
        prevCategory.current = "people";
      }
    }
  }, [pathname, dispatch]);
  return null;
};
