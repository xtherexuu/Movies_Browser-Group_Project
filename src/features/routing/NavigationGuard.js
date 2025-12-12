// import { useEffect } from "react";
// import { useNavigate } from "react-router";
// import { useDispatch, useSelector } from "react-redux";
// import { selectRedirectTo, clearRedirect } from "./routeSlice";
// import { selectPage, selectSearch } from "../queries/queriesSlice";

// const NavigationGuard = () => {
//   const redirectTo = useSelector(selectRedirectTo);
//   const search = useSelector(selectSearch);
//   const page = useSelector(selectPage);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!redirectTo) return;

//     const params = new URLSearchParams();
//     if (search) params.set("s", search);
//     params.set("page", page || "1");

//     navigate(`${redirectTo}?${params.toString()}`, { replace: true });
//     dispatch(clearRedirect());
//   }, [redirectTo, search, page, navigate, dispatch]);

//   return null;
// };

// export default NavigationGuard;

