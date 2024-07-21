import { Link } from "react-router-dom";
import AnimeCard from "../../../components/AnimeCard/AnmeCard";
import { useGetFeedQuery } from "../../../redux/api/Anime";
import scss from "./FeedSection.module.scss";
import Loader from "../../../components/Loader/Loader";
const FeedSection = () => {
  const { data: feed, isLoading } = useGetFeedQuery();

  if (isLoading) return <Loader />;
  return (
    <section className={scss.FeedSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2>Последние релизы</h2>
            <Link to="#">Что еще посмотреть?</Link>
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
