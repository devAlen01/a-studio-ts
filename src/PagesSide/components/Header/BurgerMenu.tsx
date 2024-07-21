import { Link } from "react-router-dom";
import scss from "./BurgerMenu.module.scss";
import { FC } from "react";

interface PagesT {
  path: string;
  page: string;
}
interface MenuType {
  pages: PagesT[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const BurgerMenu: FC<MenuType> = ({ pages, isOpen, setIsOpen }) => {
  return (
    <div
      className={
        isOpen ? `${scss.BurgerMenu} ${scss.active}` : `${scss.BurgerMenu}`
      }
    >
      <div className={scss.content}>
        {pages.map((el, index) => (
          <Link onClick={() => setIsOpen(!isOpen)} key={index} to={el.path}>
            {el.page}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BurgerMenu;
