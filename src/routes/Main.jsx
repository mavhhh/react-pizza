import React from "react";
import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

export default function Main() {
  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    fetch("https://66ccaf20a4dd3c8a71b87c41.mockapi.io/Items")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setIsLoaded(true);
      });
  }, []);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoaded
              ? items.map((obj, index) => <PizzaBlock {...obj} />)
              : [...Array(6)].map((_, i) => <Skeleton key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
}
