import React from "react";

const Cart = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Корзина пуста <icon>😕</icon>
      </h2>
      <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img src="/img/empty-cart.png" alt="Empty cart" />
      <a href="/" class="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  );
};

export default Cart;
