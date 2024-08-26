import "./App.css";
import "./scss/app.scss";

import React from "react";
import { Header } from "./components/Header";
import { Categories } from "./components/Categories";
import { PizzaBlock } from "./components/PizzaBlock";
import { Sort } from "./components/Sort";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://66ccaf20a4dd3c8a71b87c41.mockapi.io/Items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {items.map((obj, index) => (
                <PizzaBlock {...obj} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
