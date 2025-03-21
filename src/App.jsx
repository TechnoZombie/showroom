import './App.css';
import './components/Main.css';
import './components/Header.css';

import Sidebar from "./components/Sidebar.jsx";
import Header from "./components/Header.jsx";
function App() {

    return (
        <>
            <div className="header-bar">
                <Header/>
            </div>

            <Sidebar/>


            <div className="main-content">

            </div>


        </>)
}

export default App
