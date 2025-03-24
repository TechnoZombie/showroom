import './App.css';
import './components/Showcase.css';
import './components/Header.css';

import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
import {Route, Routes} from "react-router-dom";
import CurrencyConverter from "./components/CurrencyConverter.jsx";
import ChuckNorrisFacts from "./components/ChuckNorrisFacts.jsx";
import About from "./components/About.jsx";
import Intro from "./components/Intro.jsx";
import QRCodeGenerator from "./components/QRCodeGenerator.jsx";
import Showcase from "./components/Showcase.jsx";

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
