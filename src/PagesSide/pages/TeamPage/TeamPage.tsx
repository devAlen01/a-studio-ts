import scss from "./TeamPage.module.scss";
import apiAnime from "../../../redux/api/Anime";

const TeamPage = () => {
  const { data: team } = apiAnime.useGetTeamListQuery();

  // const teamList: string[] = [
  //   "Озвучка",
  //   "Перевод",
  //   "Редактирование",
  //   "Оформление",
  //   "Тайминг",
  // ];

  console.log(team?.decor, "team");

  return (
    <div className={scss.TeamPage}>
      <div className="container">
        <div className={scss.content}>
          {team?.voice.map((el, index) => (
            <div key={index} className={scss.voice}>
              <h4>{el}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
