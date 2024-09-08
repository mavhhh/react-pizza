import React from "react";

import { useSelector } from "react-redux";
import { useAppDispatch } from "../redux/store.ts";

import { Categories } from "../components/Categories.tsx";
import { Sort } from "../components/Sort.tsx";
import { PizzaBlock } from "../components/PizzaBlock/index.tsx";
import { Skeleton } from "../components/PizzaBlock/Skeleton.tsx";
import { fetchPizzas } from "../redux/slices/pizzaSlice.ts";
import { RootState } from "../redux/store.ts";
import type { FetchPizzasArgs } from "../redux/slices/pizzaSlice.ts";

export default function Main() {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector((state: RootState) => state.pizza);
  const { sort, categoryId, title } = useSelector(
    (state: RootState) => state.filter
  );

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const category = (categoryId > 0 ? categoryId : "").toString();

    const params: FetchPizzasArgs = {
      category: category,
      sortBy: sortBy,
      title: title,
    };

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
