import React from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";

export default function Main() {
  const { sort, categoryId, title } = useSelector((state) => state.filter);

  const [items, setItems] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    setIsLoaded(false);
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? categoryId : "";

    const params = new URLSearchParams();
    params.append("category", category);
    params.append("sortBy", sortBy);
    params.append("title", title);

    axios
      .get("https://66ccaf20a4dd3c8a71b87c41.mockapi.io/Items", { params })
      .catch((error) => console.log(error))
      .then((res) => res?.data && setItems(res?.data))
      .then(setIsLoaded(true));
  }, [sort, categoryId, title]);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <div className="content__items">
            {isLoaded
              ? items.map((obj, index) => <PizzaBlock key={obj.id} {...obj} />)
              : [...Array(6)].map((_, i) => <Skeleton key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
}
