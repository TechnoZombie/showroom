import React from 'react';
import { motion } from "framer-motion";
import "../css/Home.css";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import homePageMarkdown from "./markdownFiles/homePage-markdown.js";

const Home = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1.3}}
            >
                <MarkdownRenderer markdownContent={homePageMarkdown} imageClassName="rounded-image" />

            </motion.div>
        </>
    );
}

export default Home;