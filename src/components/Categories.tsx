import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setCategoryId } from "../redux/slices/filterSlice.ts";
import { RootState } from "../redux/store.ts";

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  const onCategoryChange = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const categoriesNames = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categoriesNames.map((val, id) => (
          <li
            key={id}
            className={categoryId === id ? "active" : ""}
            onClick={() => onCategoryChange(id)}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};
