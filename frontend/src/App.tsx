import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Home from "./pages/Home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />}>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
