import React from 'react';
import {motion} from "framer-motion";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import thisWebsiteMarkdown from "./markdownFiles/thisWebsite-markdown.js";
import Button from "./Button.jsx";
import {FaGithub} from "react-icons/fa";

const ThisWebsite = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <Button
                className={"viewOnGithub-button"}
                link="https://github.com/technozombie/showroom"
            ><FaGithub/> View on GitHub</Button>

            <MarkdownRenderer markdownContent={thisWebsiteMarkdown}/>
        </motion.div>
    );
};

export default ThisWebsite;