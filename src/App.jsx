import './App.css';
import './css/Showcase.css';
import './css/Header.css';

import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import CurrencyConverter from "./components/CurrencyConverter.jsx";
import ChuckNorrisFacts from "./components/ChuckNorrisFacts.jsx";
import About from "./components/About.jsx";
import Home from "./components/Home.jsx";
import QRCodeGenerator from "./components/QRCodeGenerator.jsx";
import Showcase from "./components/Showcase.jsx";
import PixelPainterEnhanced from "./components/PixelPainterEnhanced.jsx";

function App() {

    return (
        <>
            {/*     <div className="header-bar">
              <Header/>
            </div>*/}

           <Sidebar/>
           <Showcase/>

        </>)
}

export default App
