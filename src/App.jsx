import PageLayout from "./common/PageLayout";
import QueriesSync from "./features/queries/QueriesSync";
import NavigationGuard from "./features/routing/NavigationGuard";
import RouteSync from "./features/routing/RouteSync";

const App = () => {
  return (
    <>
      <NavigationGuard />
      <QueriesSync />
      <RouteSync />
      <PageLayout />
    </>
  );
};

export default App;
