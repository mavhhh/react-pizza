import React from "react";

import styles from "./Modal.module.scss";

export const Modal = ({ active, setActive, children }) => {
  const close = (event) => {
    event.nativeEvent.stopImmediatePropagation();
    setActive(false);
  };

  return (
    <div
      onClick={close}
      className={`${styles.modal} ${active ? styles.modalActive : ""}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${styles.modalContent} ${
          active ? styles.modalContentActive : ""
        }`}
      >
        <div onClick={close} className={styles.iconWrapper}>
          <svg
            className={styles.iconClose}
            width="40px"
            height="40px"
            viewBox="0 0 30 30"
          >
            <path
              fill="#ffffff"
              d="M25.707,6.293c-0.195-0.195-1.805-1.805-2-2c-0.391-0.391-1.024-0.391-1.414,0c-0.195,0.195-17.805,17.805-18,18c-0.391,0.391-0.391,1.024,0,1.414c0.279,0.279,1.721,1.721,2,2c0.391,0.391,1.024,0.391,1.414,0c0.195-0.195,17.805-17.805,18-18C26.098,7.317,26.098,6.683,25.707,6.293z"
            />
            <path
              fill="#ffffff"
              d="M23.707,25.707c0.195-0.195,1.805-1.805,2-2c0.391-0.391,0.391-1.024,0-1.414c-0.195-0.195-17.805-17.805-18-18c-0.391-0.391-1.024-0.391-1.414,0c-0.279,0.279-1.721,1.721-2,2c-0.391,0.391-0.391,1.024,0,1.414c0.195,0.195,17.805,17.805,18,18C22.683,26.098,23.317,26.098,23.707,25.707z"
            />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};
