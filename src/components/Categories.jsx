import React from "react";

export const Categories = () => {
  const [activeId, setActiveId] = React.useState(0);

  const categoriesNames = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const handleCategorieClick = (id) => {
    setActiveId(id);
  };

  return (
    <div className="categories">
      <ul>
        {categoriesNames.map((val, id) => (
          <li
            key={id}
            className={activeId === id ? "active" : ""}
            onClick={() => handleCategorieClick(id)}
          >
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};
