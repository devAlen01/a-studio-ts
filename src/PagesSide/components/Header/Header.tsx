import { Link, NavLink } from "react-router-dom";
import scss from "./Header.module.scss";

const Header = () => {
  const pages = [
    {
      path: "/schedule",
      page: "Расписание",
    },
    {
      path: "/catalog",
      page: "Каталог",
    },
    {
      path: "/team",
      page: "Команда ",
    },
  ];

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <Link to={"/"}>
            <h3>A.STUDIO</h3>
          </Link>
          <nav className={scss.navigate}>
            {pages.map((el, index) => (
              <NavLink key={index} to={el.path}>
                {el.page}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
