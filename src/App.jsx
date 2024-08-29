import React from "react";

import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./routes/Main";
import NotFound from "./routes/NotFound";

import "./App.css";
import "./scss/app.scss";
import { Cart } from "./routes/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Main />
      </>
    ),
    errorElement: (
      <>
        <Header />
        <NotFound />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <Cart />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
