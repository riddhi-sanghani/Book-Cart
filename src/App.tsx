import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Book from "./Pages/Book";
import Cart from "./Pages/Cart";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Book />}></Route>
        <Route path="/cart" element={<Cart />} />
      </Route>
    )
  );

  return (
    <>
      {/* <Header title="React Movie Management Application" /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
