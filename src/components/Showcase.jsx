import "../css/Showcase.css";
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Intro from "./Intro.jsx";
import About from "./About.jsx";
import CurrencyConverter from "./CurrencyConverter.jsx";
import QRCodeGenerator from "./QRCodeGenerator.jsx";
import ChuckNorrisFacts from "./ChuckNorrisFacts.jsx";
import PixelPainterEnhanced from "./PixelPainterEnhanced.jsx";
import Simplegraphz from "./Simplegraphz.jsx";
import Spacenewzz from "./Spacenewzz.jsx";
import PixelPainter from "./PixelPainter.jsx";
import Home from "./Home.jsx";

function Showcase() {
    return (
        <div className="showcase">
            <Routes>
                <Route path="/" element={<Intro/>}/>
                <Route path="Home" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="CurrencyConverter" element={<CurrencyConverter/>}/>
                <Route path="QRCodeGenerator" element={<QRCodeGenerator/>}/>
                <Route path="ChuckNorrisFacts" element={<ChuckNorrisFacts/>}/>
                <Route path="Spacenewzz" element={<Spacenewzz/>}/>
                <Route path="PixelPainter" element={<PixelPainter/>}/>
                <Route path="PixelPainterEnhanced" element={<PixelPainterEnhanced/>}/>
                <Route path="Simplegraphz" element={<Simplegraphz/>}/>
            </Routes>

        </div>);
}

export default Showcase;