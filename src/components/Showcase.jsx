import "../css/Showcase.css";
import React from 'react';
import Home from "./Home.jsx";
import About from "./About.jsx";
import CurrencyConverter from "./CurrencyConverter.jsx";
import QRCodeGenerator from "./QRCodeGenerator.jsx";
import ChuckNorrisFacts from "./ChuckNorrisFacts.jsx";
import PixelPainterEnhanced from "./PixelPainterEnhanced.jsx";
import Simplegraphz from "./Simplegraphz.jsx";
import Spacenewzz from "./Spacenewzz.jsx";
import PixelPainter from "./PixelPainter.jsx";
import {Route, Routes} from "react-router-dom";
import ThisWebsite from "./ThisWebsite.jsx";

function Showcase() {
    return (
        <div className="showcase">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/this" element={<ThisWebsite/>}/>
                <Route path="/CurrencyConverter" element={<CurrencyConverter/>}/>
                <Route path="/QRCodeGenerator" element={<QRCodeGenerator/>}/>
                <Route path="/ChuckNorrisFacts" element={<ChuckNorrisFacts/>}/>
                <Route path="/Spacenewzz" element={<Spacenewzz/>}/>
                <Route path="/PixelPainter" element={<PixelPainter/>}/>
                <Route path="/PixelPainterEnhanced" element={<PixelPainterEnhanced/>}/>
                <Route path="/Simplegraphz" element={<Simplegraphz/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>

    );
}

export default Showcase;
