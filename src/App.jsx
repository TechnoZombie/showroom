import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from "./components/Button.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="header-bar">
                <Header/>
            </div>



            <div className="ButtonsTest">

                <Sidebar>

                </Sidebar>
            </div>

        </>)
}

export default App
