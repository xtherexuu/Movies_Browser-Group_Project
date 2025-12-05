import { Layout } from "./styled";
import Header from "../Header";
import { Outlet } from "react-router";

export default function PageLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}
