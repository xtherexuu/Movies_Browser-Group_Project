import { useDispatch, useSelector } from "react-redux";
import { clearRedirect, selectRedirectTo } from "./routeSlice";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default () => {
  const redirectTo = useSelector(selectRedirectTo);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!redirectTo) return;
    else {
      navigate(redirectTo);
      dispatch(clearRedirect());
    }
  }, [redirectTo, navigate, dispatch]);

  return null;
};
