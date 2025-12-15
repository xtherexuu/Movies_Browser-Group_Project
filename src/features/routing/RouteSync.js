import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import {
  selectIsDetail,
  setCategory,
  setIsDetail,
  setPath,
} from "./routeSlice";

export default () => {
  const { pathname } = useLocation();
  const prevPathname = useRef("/");
  const prevCategory = useRef("movies");
  const isDetail = useSelector(selectIsDetail);
  const { id } = useParams();

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
      if (id && !isDetail) {
        dispatch(setIsDetail(true));
      } else if (!id && isDetail) {
        dispatch(setIsDetail(false));
      }
    }
  }, [pathname, dispatch]);
  return null;
};
