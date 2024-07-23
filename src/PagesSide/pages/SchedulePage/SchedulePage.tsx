import apiAnime from "../../../redux/api/Anime";
import AnimeCard from "../../components/AnimeCard/AnmeCard";
import Loader from "../../components/Loader/Loader";
import scss from "./SchedulePage.module.scss";
const daysOfWeek: string[] = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

const SchedulePage = () => {
  const { data: schedule, isLoading } = apiAnime.useScheduleAnimeQuery();

  if (isLoading)
    return <Loader height={"100px"} width={"100px"} heightComp={"70vh"} />;

  return (
    <div className={scss.SchedulePage}>
      <div className="container">
        <div className={scss.content}>
          <h2>Расписание выхода серий</h2>
          {schedule!.map((days) => (
            <div className={scss.daysOfWeek} key={days.day}>
              <h3>{daysOfWeek[days.day]}</h3>
              <div className={scss.cards}>
                {days.list.map((el) => (
                  <AnimeCard
                    image={el?.posters?.medium.url}
                    title={el.names?.ru}
                    code={el?.code}
                    genres={el.genres}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;
