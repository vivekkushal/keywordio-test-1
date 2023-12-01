import React from "react";
import styles from "./LayoutThree.module.css";

const LayoutThree = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.firstContainer}>
        {children[0]}
        {children[1]}
      </div>
      <br />
      {children[2]}
    </div>
  );
};

export default LayoutThree;
