import React from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { Categories } from "../components/Categories";
import { Sort } from "../components/Sort";
import { PizzaBlock } from "../components/PizzaBlock";
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { fetchPizzas } from "../redux/slices/pizzaSlice";

export default function Main() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.pizza);
  const { sort, categoryId, title } = useSelector((state) => state.filter);

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? categoryId : "";

    const params = new URLSearchParams();
    params.append("category", category);
    params.append("sortBy", sortBy);
    params.append("title", title);

    try {
      await dispatch(fetchPizzas(params));
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getPizzas();
    console.log("fetch");
  }, [sort, categoryId, title]);

  React.useEffect(() => {
    console.log("main title");
  }, [title]);

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <div className="content__items">
            {status === "success" ? (
              items.map((obj, index) => <PizzaBlock key={obj.id} item={obj} />)
            ) : (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
