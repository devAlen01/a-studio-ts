import { FC } from "react";
import scss from "./AnmeCard.module.scss";
import { useNavigate } from "react-router-dom";
const IMG_HOST = "https://static-libria.weekstorm.one";

const AnimeCard: FC<FeedAnime> = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      {title !== undefined ? (
        <div
          onClick={() => navigate(`/oneTitle/${title?.code}`)}
          className={scss.AnimeCard}
        >
          <div className={scss.image}>
            <img
              src={`${IMG_HOST}/${title?.posters?.original?.url}`}
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
