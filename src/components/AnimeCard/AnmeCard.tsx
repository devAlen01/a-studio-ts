import scss from "./AnmeCard.module.scss";
import { useNavigate } from "react-router-dom";
import posterE from "../../assets/posterE.webp";
import { FC } from "react";
const IMG_HOST = "https://static-libria.weekstorm.one";

interface AnimeCardProps {
  image: string;
  title: string;
  code: string | undefined;
  genres: string[];
}

const AnimeCard: FC<AnimeCardProps> = ({ code, image, title, genres }) => {
  const navigate = useNavigate();

  return (
    <>
      {title !== undefined ? (
        <div
          onClick={() => navigate(`/oneTitle/${code}`)}
          className={scss.AnimeCard}
        >
          <div className={scss.image}>
            {image.length ? (
              <img src={`${IMG_HOST}/${image}`} alt="anime" />
            ) : (
              <img src={posterE} alt="anime" />
            )}
          </div>
          <div className={scss.title}>
            <h4 className={scss.name}>{title}</h4>
            <div className={scss.genre}>
              {genres?.map((el, index) => (
                <span key={index}> {el} </span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AnimeCard;
