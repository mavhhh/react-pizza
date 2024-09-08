import React from "react";
import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <span className={styles.emoji}>🥲</span>
      <br />
      <h1>Ничего не найдено ...</h1>
    </div>
  );
};
