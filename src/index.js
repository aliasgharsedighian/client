import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./flexboxgrid.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import addToCardReducer from "./Redux/addToCard";

const store = configureStore({
  reducer: {
    addtocards: addToCardReducer,
  },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
