/* eslint-disable react/prop-types */
import style from "./style.module.css";

const LinkButton = (props) => {
  return (
    <a
      href={props.href}
      className={style.wrapper}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  );
};

export default LinkButton;
