import scss from "./AnmeCard.module.scss";
import { useNavigate } from "react-router-dom";
const IMG_HOST = "https://static-libria.weekstorm.one";

interface AnimeCardProps {
  image: string;
  title: string;
  code: string | undefined;
  genres: string[];
}

const AnimeCard = ({ code, image, title, genres }: AnimeCardProps) => {
  const navigate = useNavigate();
  console.log();

  return (
    <>
      {title !== undefined ? (
        <div
          onClick={() => navigate(`/oneTitle/${code}`)}
          className={scss.AnimeCard}
        >
          <div className={scss.image}>
            <img src={`${IMG_HOST}/${image}`} alt="anime" />
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
