import { Link, useParams } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import scss from "./SearchResult.module.scss";
import AnimeCard from "../../../components/AnimeCard/AnmeCard";
import apiAnime from "../../../redux/api/Anime";

const SearchResult = () => {
  const { value } = useParams<string>();
  const { data: result, isLoading } = apiAnime.useSearchAnimeQuery(value!);
  if (isLoading) return <Loader />;
  return (
    <section className={scss.SearchResult}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            {result?.list.length ? (
              <h2>Результаты поиска</h2>
            ) : (
              <div
                style={{
                  fontSize: "clamp(10px, 3vw, 28px)",
                  fontWeight: "600",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "22px",
                  height: "70vh",
                }}
              >
                <span>По вашему запросу ничего не найдено</span>
                <Link
                  style={{
                    fontSize: "clamp(8px, 2vw, 16px)",
                    fontWeight: "400",
                    color: "purple",
                    textDecoration: "underline",
                  }}
                  to="/"
                >
                  Перейти на главную страницу
                </Link>
              </div>
            )}
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
