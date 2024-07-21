import Header from "../Header/Header";
import scss from "./LayoutSide.module.scss";
import Footer from "../Footer/Footer";
import { FC, ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

const LayoutSide: FC<IChildren> = ({ children }) => {
  return (
    <div className={scss.LayoutSide}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSide;
