import React from 'react';
import { motion } from "framer-motion";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import pixelpainterMarkdown from "./markdownFiles/pixelpainter-markdown.js";

const PixelPainter = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <MarkdownRenderer markdownContent={pixelpainterMarkdown}/>

        </motion.div>);
};

export default PixelPainter;