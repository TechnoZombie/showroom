import React from 'react';
import { motion } from "framer-motion";
import simplegraphzMarkdown from "./markdownFiles/simplegraphz-markdown.js";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";

const Simplegraphz = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <MarkdownRenderer markdownContent={simplegraphzMarkdown}/>
        </motion.div>
    );
};

export default Simplegraphz;