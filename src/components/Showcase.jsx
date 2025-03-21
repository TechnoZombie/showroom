import "./Showcase.css";
import React from 'react';
import {Route, Routes} from "react-router-dom";
import Intro from "./Intro.jsx";
import About from "./About.jsx";
import CurrencyConverter from "./CurrencyConverter.jsx";
import QRCodeGenerator from "./QRCodeGenerator.jsx";
import ChuckNorrisFacts from "./ChuckNorrisFacts.jsx";

function Showcase() {
    return (
        <div className="showcase">
            <Routes>
                <Route path="/" element={<Intro/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="CurrencyConverter" element={<CurrencyConverter/>}/>
                <Route path="QRCodeGenerator" element={<QRCodeGenerator/>}/>
                <Route path="ChuckNorrisFacts" element={<ChuckNorrisFacts/>}/>
            </Routes>


        </div>
    );
}

export default Showcase;