import React from 'react';
import simplegraphzMarkdown from "./markdownFiles/simplegraphz-markdown.js";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";

const Simplegraphz = () => {

    return (
        <MarkdownRenderer markdownContent={simplegraphzMarkdown}/>
    );
};

export default Simplegraphz;