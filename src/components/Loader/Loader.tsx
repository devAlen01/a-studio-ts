import scss from "./Loader.module.scss";
const Loader = () => {
  return (
    <div className={scss.Loading}>
      <div className={scss.loader}></div>
    </div>
  );
};

export default Loader;
