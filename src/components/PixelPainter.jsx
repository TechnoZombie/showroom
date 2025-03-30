import React from 'react';
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";
import pixelpainterMarkdown from "./markdownFiles/pixelpainter-markdown.js";

const PixelPainter = () => {
    return (
        <MarkdownRenderer markdownContent={pixelpainterMarkdown}/>
    );
};

export default PixelPainter;