import React from "react";
import { useLocation } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import Button from "./Button.jsx";
import "../css/Sidebar.css";

const projects = [
    { label: "About", link: "/About" },
    { label: "This website", link: "/this" },
    { label: "DeadParrot", link: "/DeadParrot" },
    { label: "Currency Converter", link: "/CurrencyConverter" },
    { label: "QR Code Generator", link: "/QRCodeGenerator" },
    { label: "Chuck Norris: Facts", link: "/ChuckNorrisFacts" },
    { label: "Spacenewzz", link: "/Spacenewzz" },
    { label: "PixelPainter", link: "/PixelPainter" },
    { label: "PixelPainter: Enhanced!", link: "/PixelPainterEnhanced" },
    { label: "Simplegraphz", link: "/Simplegraphz" },
];

function Sidebar({ theme, onToggleTheme }) {
    const { pathname } = useLocation();

    return (
        <aside className="sidebar-container" aria-label="Site navigation">
            <Button
                className="sidebar-brand"
                link="/Home"
                ariaCurrent={pathname === "/" || pathname === "/Home" ? "page" : undefined}
            >
                <span className="brand-mark" aria-hidden="true">tz</span>
                <span className="brand-copy">
                    <span className="brand-name">TechnoZombie</span>
                    <span className="brand-caption">FullStack/Backend Developer</span>
                </span>
            </Button>

            <nav className="sidebar-navigation" aria-label="Main navigation">
                <p className="navigation-label">Browse the collection</p>
                <div className="vertical-buttons">
                    {projects.map(({ label, link }, index) => (
                        <Button
                            key={link}
                            className={`sidebar-button${pathname === link ? " is-active" : ""}`}
                            link={link}
                            ariaCurrent={pathname === link ? "page" : undefined}
                        >
                            <span className="sidebar-button-index" aria-hidden="true">
                                {String(index + 1).padStart(2, "0")}
                            </span>
                            <span>{label}</span>
                        </Button>
                    ))}
                </div>
            </nav>

            <div className="sidebar-footer">
                <span className="sidebar-footer-note">Redesigned in Oct. 2026</span>
                <button
                    className="theme-toggle"
                    type="button"
                    onClick={onToggleTheme}
                    aria-pressed={theme === "dark"}
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                >
                    {theme === "dark" ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
                    <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
                </button>
                <Button className="repository-button" link="https://github.com/technozombie">
                    <FaGithub aria-hidden="true" />
                    <span>GitHub</span>
                    <span className="external-arrow" aria-hidden="true">↗</span>
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;
