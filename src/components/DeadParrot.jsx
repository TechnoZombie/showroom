import React from "react";
import {motion} from "framer-motion";
import GitHubButtonAndTechTag from "../utils/GitHubButtonAndTechTag.jsx";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import deadParrotMarkdown from "./markdownFiles/deadParrot-markdown.js";

const link = "https://github.com/technozombie/deadparrot";

const DeadParrot = () => {
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

            <MarkdownRenderer markdownContent={deadParrotMarkdown}/>

        </motion.div>);
};

export default DeadParrot;
