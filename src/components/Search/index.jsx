import React from "react";

import { useDispatch } from "react-redux";

import styles from "./Search.module.scss";
import { setTitle } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const inputRef = React.useRef();

  const onBlur = () => {
    setValue("");
    dispatch(setTitle(""));
    inputRef.current.focus();
  };

  const updateSearch = React.useCallback(
    () =>
      debounce((str) => {
        dispatch(setTitle(str));
      }, 300),

    []
  );

  const onInputChange = (e) => {
    const val = e.target.value;

    setValue(val);
    updateSearch(val);
  };

  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.iconSearch}
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        className={styles.input}
        value={value}
        ref={inputRef}
        type="text"
        onChange={onInputChange}
      ></input>
      <svg
        className={styles.iconClose}
        onClick={onBlur}
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
          fill="#000000"
        />
      </svg>
    </div>
  );
};
