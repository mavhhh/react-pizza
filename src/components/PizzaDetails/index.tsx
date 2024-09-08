import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../../redux/slices/cartSlice.ts";

import styles from "./PizzaDetalis.module.scss";
import type { PizzaItem } from "../../redux/slices/pizzaSlice.ts";
import { RootState } from "../../redux/store.ts";

export const PizzaDeatails: React.FC<{ item: PizzaItem }> = ({
  item,
}: {
  item: PizzaItem;
}) => {
  const {
    id,
    imageUrl,
    title,
    types,
    sizes,
    price,
    description,
    category,
    rating,
  } = item;

  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cart.items.find((item) => item.id === id)
  );
  const typeNames = ["Тонкое", "Традиционное"];

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const handleAddClick = () => {
    const item = {
      id,
      title,
      price,
      imageUrl,
      type: activeType,
      size: activeSize,
    };
    dispatch(addCartItem(item));
  };

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={imageUrl} alt="Pizza" />

      <div className={styles.details}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.description}>{description}</div>
        <div className={styles.selector}>
          <ul>
            {types.map((typeId) => {
              return (
                <li
                  key={typeId}
                  onClick={() => setActiveType(typeId)}
                  className={activeType === typeId ? styles.active : ""}
                >
                  {typeNames[typeId]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((item, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? styles.active : ""}
              >
                {item} см
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <div className={styles.price}>от {price} ₽</div>
          <div
            className="button button--outline button--add"
            onClick={handleAddClick}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {cartItem?.count ? <i>{cartItem?.count}</i> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};