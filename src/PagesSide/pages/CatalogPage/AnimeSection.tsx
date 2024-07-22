import AnimeCard from "../../../components/AnimeCard/AnmeCard";
import scss from "./AnimeSection.module.scss";
import Loader from "../../../components/Loader/Loader";
import apiAnime from "../../../redux/api/Anime";
// import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changePage } from "../../../redux/features/animeSlice";

const AnimeSection = () => {
  const { itemPage } = useAppSelector((state) => state.animeSlice);
  const dispatch = useAppDispatch();
  const { data: animeList, isLoading } =
    apiAnime.useGetAnimeListQuery(itemPage);

  const handleItemAdd = (page: number) => {
    dispatch(changePage(itemPage + page));
  };

  if (isLoading) return <Loader />;

  return (
    <section className={scss.AnimeSection}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h2>Каталог релизов</h2>
            <h6>Всего: {animeList?.pagination?.total_items}</h6>
          </div>
          <div className={scss.cards}>
            {animeList &&
              animeList?.list?.map((el, index) => (
                <AnimeCard
                  key={el?.id || index}
                  image={el?.posters.original.url}
                  title={el?.names.ru}
                  code={el?.code}
                  genres={el?.genres}
                />
              ))}
          </div>

          <div className={scss.show_more}>
            <button className={scss.btn} onClick={() => handleItemAdd(20)}>
              Показать еще
            </button>
          </div>
        </div>
        {/* <ResponsivePagination
          current={activePage}
          total={animeList?.pagination?.pages!}
          onPageChange={handlePageChange}
        /> */}
      </div>
    </section>
  );
};

export default AnimeSection;
