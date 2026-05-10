import React from "react";
import {motion} from "framer-motion";
import GitHubButtonAndTechTag from "../utils/GitHubButtonAndTechTag.jsx";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import deadParrotMarkdown from "./markdownFiles/deadParrot-markdown.js";
import ImageGallery from "../utils/ImageGallery.jsx";

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

            <ImageGallery
                images={[
                    {src: "./dp/dp01.png", alt: "DeadParrot Listening"},
                    {src: "./dp/dp02.png", alt: "DeadParrot Played back"},
                    {src: "./dp/dp03.png", alt: "DeadParrot Audio probe"}
                ]}
            />
            <MarkdownRenderer markdownContent={deadParrotMarkdown}/>

        </motion.div>);
};

export default DeadParrot;
