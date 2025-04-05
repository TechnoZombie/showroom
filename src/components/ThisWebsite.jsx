import React from 'react';
import {motion} from "framer-motion";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import thisWebsiteMarkdown from "./markdownFiles/thisWebsite-markdown.js";
import GitHubButtonAndTechTag from "../utils/GitHubButtonAndTechTag.jsx";

const link = "https://github.com/technozombie/showroom";
const ThisWebsite = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >

            <GitHubButtonAndTechTag
                link={link}
                techs={["react", "vite", "javascript"]}/>

            <MarkdownRenderer markdownContent={thisWebsiteMarkdown}/>
        </motion.div>
    );
};

export default ThisWebsite;