import { useParams } from "react-router-dom";
import scss from "./DetailPage.module.scss";
import ReactPlayer from "react-player/lazy";
import Loader from "../../../components/Loader/Loader";
import { useState } from "react";
import apiAnime from "../../../redux/api/Anime";
const IMG_HOST = "https://static-libria.weekstorm.one";
const VIDEO_HOST = "https://cache.libria.fun";
type videoQuality = "sd" | "hd" | "fhd";

const DetailPage = () => {
  const { code } = useParams();
  const { data: title, isLoading } = apiAnime.useGetOneAnimeQuery(code!);
  const listEpisode = title!?.player?.list
    ? Object.values(title!?.player?.list)
    : [];
  const [activeEpisode, setActiveEpisode] = useState(1);
  const [videoQuality, setVideoQuality] = useState<videoQuality>("hd");

  if (isLoading) return <Loader />;

  return (
    <section className={scss.DetailPage}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.description}>
            <div className={scss.image}>
              <img
                src={`${IMG_HOST}/${title?.posters?.original?.url}`}
                alt="animePoster"
              />
            </div>
            <div className={scss.season_type}>
              <div className={scss.season}>
                <span>Сезон: {title?.season.year} </span>
                <span>{title?.season.string}</span>
              </div>
              <span className={scss.type}>
                Тип: {title?.type.full_string} | Статус: {title?.status.string}
              </span>
              <div className={scss.genres}>
                Жанр:
                {title?.genres.map((gen, index) => (
                  <span key={index}> {gen} | </span>
                ))}
              </div>
              <hr />
            </div>
          </div>
          {listEpisode.length ? (
            <div className={scss.anime_video}>
              <div className={scss.episode_quality}>
                <select
                  value={activeEpisode}
                  onChange={(e) => setActiveEpisode(+e.target.value)}
                >
                  {listEpisode.map((episode, index) => (
                    <option
                      key={episode?.uuid || index}
                      value={episode?.episode}
                    >
                      Эпизод {episode?.episode}
                    </option>
                  ))}
                </select>

                <select
                  onChange={(e) =>
                    setVideoQuality(e.target.value as videoQuality)
                  }
                >
                  <option value="sd">480p</option>
                  <option value="hd">720p</option>
                  <option value="fhd">1080p</option>
                </select>
              </div>
              <div className={scss.player}>
                {listEpisode.map((el, index) =>
                  el.episode == activeEpisode ? (
                    <div key={index} className={scss.play}>
                      <ReactPlayer
                        url={`${VIDEO_HOST}/${el?.hls[videoQuality]}`}
                        width="100%"
                        height="100%"
                        controls
                      />
                    </div>
                  ) : null
                )}
              </div>
              <div className={scss.text}>
                <div className={scss.title}>
                  <h3>{title?.names.ru}</h3>
                  <h5>{title?.names.en}</h5>
                </div>
              </div>
              <p>{title?.description}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
