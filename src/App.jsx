import './App.css';
import './css/Showcase.css';
import './css/Header.css';

import Sidebar from "./components/Sidebar.jsx";
import Showcase from "./components/Showcase.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
    return (
        <>
            <ScrollToTop />
            <Sidebar/>
            <Showcase/>
        </>
    );
}

export default App;
