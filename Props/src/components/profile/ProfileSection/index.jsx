/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import style from "./style.module.css";
const ProfileSection = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <div className={style.wrapper}>{props.children}</div>
  );
};

export default ProfileSection;
