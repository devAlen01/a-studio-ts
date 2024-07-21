import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import scss from "./Footer.module.scss";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={scss.Footer}>
      <div className={scss.line}></div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.media_icons}>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaTelegram />
            </span>
            <span>
              <FaWhatsapp />
            </span>
          </div>
          <div className={scss.text}>
            <p>© 2024 «A.STIUDO» Разработано с любовью</p>
            <span>
              <FaHeart />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
