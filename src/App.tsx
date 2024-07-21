import LayoutSide from "./PagesSide/components/layout/LayoutSide";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
      <LayoutSide>
        <MainRoutes />
      </LayoutSide>
    </>
  );
};

export default App;
