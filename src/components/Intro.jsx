import React from 'react';
import { motion } from "framer-motion";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import introPageMarkdown from "./markdownFiles/introPage-markdown.js";

const Intro = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 1.3}}
            >
                    <MarkdownRenderer markdownContent={introPageMarkdown}/>

            </motion.div>
        </>
    );
}

export default Intro;