import styles from "./search.module.css";

export const Search = ({
  placeHolder
}) => {
  return (
    <input
      className={styles.search}
      type="text"
      placeholder={placeHolder}
      value={placeHolder} />
  );
};