import { useEffect, useState } from "react";
import './App.css';
import './css/Showcase.css';

import Sidebar from "./components/Sidebar.jsx";
import Showcase from "./components/Showcase.jsx";
import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
    const [theme, setTheme] = useState(() => {
        const savedTheme = window.localStorage.getItem("showroom-theme");
        return savedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem("showroom-theme", theme);
    }, [theme]);

    return (
        <>
            <ScrollToTop />
            <Sidebar
                theme={theme}
                onToggleTheme={() => setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")}
            />
            <Showcase/>
        </>
    );
}

export default App;
