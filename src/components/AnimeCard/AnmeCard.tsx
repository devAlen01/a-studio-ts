import { FC } from "react";
import scss from "./AnmeCard.module.scss";
const IMG_API = "https://static-libria.weekstorm.one";

const AnimeCard: FC<FeedAnime> = ({ title }) => {
  return (
    <>
      {title !== undefined ? (
        <div className={scss.AnimeCard}>
          <div className={scss.image}>
            <img
              src={`${IMG_API}/${title?.posters?.original?.url}`}
              alt="anime"
            />
          </div>
          <div className={scss.title}>
            <h4 className={scss.name}>{title?.names?.ru}</h4>
            <div className={scss.genre}>
              {title?.genres?.slice(0, 3).map((gen, index) => (
                <span key={index}>{gen}</span>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AnimeCard;
