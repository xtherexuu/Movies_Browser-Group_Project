import { Layout } from "./styled";
import Header from "../Header";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
};

export default PageLayout;
