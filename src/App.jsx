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
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => setCount(0)}>
                    reset count
                </button>
            </div>
            <div className="ButtonsTest">
                <Button label="GITHUB" link="http://github.com/technozombie" id="github-button"/>
                <Sidebar>

                </Sidebar>
            </div>

        </>)
}

export default App
