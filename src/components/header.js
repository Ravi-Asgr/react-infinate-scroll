import styles from "./header.module.css";

export const Header = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};