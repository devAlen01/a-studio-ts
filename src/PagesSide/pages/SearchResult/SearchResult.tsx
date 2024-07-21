import { useParams } from "react-router-dom";
import { useSearchAnimeQuery } from "../../../redux/api/Anime";
import Loader from "../../../components/Loader/Loader";
import scss from "./SearchResult.module.scss";
import AnimeCard from "../../../components/AnimeCard/AnmeCard";

const SearchResult = () => {
  const { value } = useParams<string>();
  const { data: result, isLoading } = useSearchAnimeQuery(value!);

  if (isLoading || result?.list?.length! < 0) return <Loader />;
  return (
    <section className={scss.SearchResult}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2>Результаты поиска</h2>
          </div>
          <div className={scss.cards}>
            {result &&
              result?.list?.map((el, index) => (
                <AnimeCard
                  key={el?.id || index}
                  image={el.posters.original.url}
                  title={el.names.ru}
                  code={el.code}
                  genres={el?.genres?.map((el) => el)}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchResult;
