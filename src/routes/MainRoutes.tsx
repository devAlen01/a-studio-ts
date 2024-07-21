import { Route, Routes } from "react-router-dom";
import SchedulePage from "../PagesSide/pages/SchedulePage/SchedulePage";
import TeamPage from "../PagesSide/pages/TeamPage/TeamPage";
import CatalogPage from "../PagesSide/pages/CatalogPage/CatalogPage";
import HomePage from "../PagesSide/pages/HomePage/HomePage";

const MainRoutes = () => {
  const PUBLIC = [
    {
      id: 0,
      link: "/",
      element: <HomePage />,
    },
    {
      id: 1,
      link: "/schedule",
      element: <SchedulePage />,
    },
    {
      id: 2,
      link: "/team",
      element: <TeamPage />,
    },
    {
      id: 3,
      link: "/catalog",
      element: <CatalogPage />,
    },
  ];
  return (
    <>
      <Routes>
        {PUBLIC.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;