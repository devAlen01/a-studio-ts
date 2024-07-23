import { FC } from "react";
import scss from "./Loader.module.scss";

interface LoaderProps {
  height: string;
  width: string;
  heightComp: string;
}

const Loader: FC<LoaderProps> = ({ heightComp, width, height }) => {
  return (
    <div
      className={scss.Loading}
      style={{
        height: heightComp,
      }}
    >
      <div
        className={scss.loader}
        style={{
          width: width,
          height: height,
        }}
      ></div>
    </div>
  );
};

export default Loader;
