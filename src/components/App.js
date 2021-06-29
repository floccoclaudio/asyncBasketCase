import React from "react";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./Navbar";
import ItemList from "./ItemList";
import Cart from "./Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <ItemList />
        </Route>
        <Route path="/my-Cart">
          <Cart />
        </Route>
        <Route path="*">Page not found sorry</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
