import "index.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "App";
import MultiPlayerHeader from "components/MultiPlayerHeader";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { store } from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<MultiPlayerHeader />} />
                    <Route path="/fast_fingers/:id" element={<App />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
