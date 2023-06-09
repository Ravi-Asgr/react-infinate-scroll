import styles from "./unitsearch.module.css";

export const UnitSearch = ({ unitSystem }) => {
  return (
    <div className={styles.wrapper}>
      <p
        className={`${styles.switch} ${
          unitSystem == "metric" ? styles.active : styles.inactive
        }`}
       
      >
        Metric System
      </p>
      <p
        className={`${styles.switch} ${
          unitSystem == "metric" ? styles.inactive : styles.active
        }`}
        
      >
        Imperial System
      </p>
    </div>
  );
};