import { Link, NavLink, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import BurgerMenu from "./BurgerMenu";
import { LuSearch } from "react-icons/lu";

interface PagesT {
  path: string;
  page: string;
}

const Header = () => {
  const pages: PagesT[] = [
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

  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 750);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.search_input_logo}>
            <Link to={"/"}>
              <h3>A.STUDIO</h3>
            </Link>
            <div className={scss.input_icon}>
              <input
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate(`/search/${inputValue}`);
                  }
                }}
                type="text"
                placeholder="Поиск..."
              />
              <button
                onClick={() => {
                  navigate(`/search/${inputValue}`);
                }}
                className={scss.icon}
              >
                <LuSearch />
              </button>
            </div>
          </div>
          <div className={scss.links}>
            {isMobile ? (
              <>
                <button
                  className={scss.burger_btn}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <IoMenu />
                </button>
                <BurgerMenu
                  isOpen={isOpen}
                  pages={pages}
                  setIsOpen={setIsOpen}
                />
              </>
            ) : (
              <nav className={scss.navigate}>
                {pages.map((el, index) => (
                  <NavLink key={index} to={el.path}>
                    {el.page}
                  </NavLink>
                ))}
              </nav>
            )}
          </div>
        </div>
      </div>
      <button className={scss.btn}>Войти</button>
    </header>
  );
};

export default Header;
