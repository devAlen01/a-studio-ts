import AnimeCard from "../../components/AnimeCard/AnmeCard";
import scss from "./AnimeSection.module.scss";
import apiAnime from "../../../redux/api/Anime";
// import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { changePage } from "../../../redux/features/animeSlice";
import Loader from "../../components/Loader/Loader";
import { useState } from "react";

const AnimeSection = () => {
  const [load, setLoad] = useState(false);
  const { itemPage } = useAppSelector((state) => state.animeSlice);
  const dispatch = useAppDispatch();
  const { data: animeList, isLoading } =
    apiAnime.useGetAnimeListQuery(itemPage);

  const handleItemAdd = (page: number) => {
    setLoad(true);
    dispatch(changePage(itemPage + page));
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  };

  if (isLoading)
    return <Loader height={"100px"} width={"100px"} heightComp={"70vh"} />;

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

          {!load ? (
            <div className={scss.show_more}>
              <button className={scss.btn} onClick={() => handleItemAdd(20)}>
                Показать еще
              </button>
            </div>
          ) : (
            <Loader height={"25px"} width={"25px"} heightComp={""} />
          )}
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
