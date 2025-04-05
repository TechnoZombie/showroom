import React from 'react';
import {motion} from "framer-motion";
import simplegraphzMarkdown from "./markdownFiles/simplegraphz-markdown.js";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import GitHubButtonAndTechTag from "../utils/GitHubButtonAndTechTag.jsx";

const link = "https://github.com/TechnoZombie/Simplegraphz"
const Simplegraphz = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <GitHubButtonAndTechTag
                link={link}
                techs={["java"]}/>

            <MarkdownRenderer markdownContent={simplegraphzMarkdown}/>
        </motion.div>
    );
};

export default Simplegraphz;