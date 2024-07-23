import { Link } from "react-router-dom";
import scss from "./FeedSection.module.scss";
import apiAnime from "../../../redux/api/Anime";
import Loader from "../../components/Loader/Loader";
import AnimeCard from "../../components/AnimeCard/AnmeCard";
const FeedSection = () => {
  const { data: feed, isLoading } = apiAnime.useGetFeedQuery();

  if (isLoading)
    return <Loader height={"100px"} width={"100px"} heightComp={"70vh"} />;
  return (
    <section className={scss.FeedSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2>Последние релизы</h2>
            <Link to="/catalog">Что еще посмотреть?</Link>
          </div>
          <div className={scss.cards}>
            {feed &&
              feed?.list?.map((el, index) => (
                <AnimeCard
                  key={el?.title?.id || index}
                  image={el.title?.posters.original.url}
                  title={el.title?.names.ru}
                  code={el.title?.code}
                  genres={el?.title?.genres}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedSection;
