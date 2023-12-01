import React from "react";
import styles from "./LayoutOne.module.css";

const LayoutOne = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={`${styles.section} ${styles.left}`}>
        {children[0]}
        <br />
        {children[1]}
      </div>
      <div className={styles.section}>{children[2]}</div>
    </div>
  );
};

export default LayoutOne;
