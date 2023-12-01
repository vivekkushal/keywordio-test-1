import React from "react";
import styles from "./PageNotFound.module.css";

const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 Not Found!</h1>
      <br />
      <p>The page you have been looking for, </p>
      <p>In the depths of the web, it's no more</p>
      <p>A 404 we see, </p>
      <p>It's not meant to be, </p>
      <p>But fret not, there's plenty more to explore!</p>
    </div>
  );
};

export default PageNotFound;
