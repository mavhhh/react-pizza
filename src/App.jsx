import React from "react";

import { Header } from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./routes/Main";
import NotFound from "./routes/NotFound";
import Cart from "./routes/Cart";

import "./scss/app.scss";

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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
