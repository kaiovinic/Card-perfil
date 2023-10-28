import styles from "./Title.module.css";
const Title = (props) => {
  // eslint-disable-next-line react/prop-types
  return (
    // eslint-disable-next-line react/prop-types
    <h2 className={styles.wrapper}>{props.children}</h2>
  );
};

export default Title;
