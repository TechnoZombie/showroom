import React from 'react';
import { motion } from "framer-motion";
import simplegraphzMarkdown from "./markdownFiles/simplegraphz-markdown.js";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import Button from "./Button.jsx";
import {FaGithub} from "react-icons/fa";

const Simplegraphz = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <Button
                className={"viewOnGithub-button"}
                link="https://github.com/TechnoZombie/Simplegraphz"
            ><FaGithub/> View on GitHub</Button>

            <MarkdownRenderer markdownContent={simplegraphzMarkdown}/>
        </motion.div>
    );
};

export default Simplegraphz;