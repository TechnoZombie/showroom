import React from 'react';
import { motion } from "framer-motion";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import pixelpainterMarkdown from "./markdownFiles/pixelpainter-markdown.js";
import Button from "./Button.jsx";
import {FaGithub} from "react-icons/fa";

const PixelPainter = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <Button
                className={"viewOnGithub-button"}
                link="https://github.com/technozombie/pixelpainter"
            ><FaGithub/> View on GitHub</Button>

            <MarkdownRenderer markdownContent={pixelpainterMarkdown}/>

        </motion.div>);
};

export default PixelPainter;