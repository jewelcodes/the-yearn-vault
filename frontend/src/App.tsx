import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Submit from "./pages/Submit/Submit";
import Submissions from "./pages/Submissions/Submissions";
import Support from "./pages/Support/Support";
import Privacy from "./pages/Privacy/Privacy";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About /> } />
                    <Route path="submit" element={<Submit /> } />
                    <Route path="submissions" element={<Submissions />} />
                    <Route path="support" element={<Support />} />
                    <Route path="privacy" element={<Privacy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
