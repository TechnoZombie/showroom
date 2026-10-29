import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/Home.css";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import homePageMarkdown from "./markdownFiles/homePage-markdown.js";

const projects = [
    { name: "DeadParrot", link: "/DeadParrot" },
    { name: "Currency Converter", link: "/CurrencyConverter" },
    { name: "QR Code Generator", link: "/QRCodeGenerator" },
    { name: "Chuck Norris: Facts", link: "/ChuckNorrisFacts" },
    { name: "Spacenewzz", link: "/Spacenewzz" },
    { name: "PixelPainter", link: "/PixelPainter" },
    { name: "PixelPainter: Enhanced!", link: "/PixelPainterEnhanced" },
    { name: "Simplegraphz", link: "/Simplegraphz" },
];

const Home = () => (
    <motion.main
        className="home-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.55 }}
    >
        <section className="home-hero" aria-labelledby="home-title">
            <div className="home-intro">
                <p className="home-eyebrow">PERSONAL PROJECTS <span>/</span> DIGITAL OBJECTS</p>
                <h1 id="home-title">A collection of <em>experiments.</em></h1>
                <p className="home-description">
                    A collection of tools, experiments, and ideas built by TechnoZombie.
                </p>
                <Link className="home-about-link" to="/About">
                    About me <span aria-hidden="true">↗</span>
                </Link>
            </div>

            <figure className="home-portrait">
                <MarkdownRenderer
                    markdownContent={homePageMarkdown}
                    imageClassName="rounded-image"
                />
                <figcaption><span>FIG. 01</span> THE USUAL SUSPECT</figcaption>
            </figure>

            {/*<span className="hero-side-note" aria-hidden="true">A PERSONAL COLLECTION</span>*/}
        </section>

        <section className="project-index" aria-labelledby="project-index-title">
            <div className="project-index-heading">
                <div>
                    <p className="home-eyebrow">TAKE A LOOK AROUND</p>
                    <h2 id="project-index-title">Project index</h2>
                </div>
                <span className="project-count">08 <span>PROJECTS</span></span>
            </div>

            <div className="project-index-list">
                {projects.map(({ name, link }, index) => (
                    <Link className="project-index-link" key={link} to={link}>
                        <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                        <span className="project-name">{name}</span>
                        <span className="project-arrow" aria-hidden="true">↗</span>
                    </Link>
                ))}
            </div>

            <footer className="home-footer">
                {/*<span>Made to be explored.</span>*/}
                <span>TechnoZombie</span>
            </footer>
        </section>
    </motion.main>
);

export default Home;
