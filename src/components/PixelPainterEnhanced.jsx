import React from 'react';
import pixelpainterEnhancedMarkdown from "./markdownFiles/pixelpainter-enhanced-markdown.js";
import ImageGallery from "./ImageGallery.jsx";
import MarkdownRenderer from "../utils/MarkdownRenderer.jsx";

const PixelPainterEnhanced = () => {
    return (
        <>
            <ImageGallery
                images={[
                    {src: "/ppe/ppe01.png", alt: "Main Screen"},
                    {src: "/ppe/ppe02.png", alt: "Edit Menu"},
                    {src: "/ppe/ppe03.png", alt: "Manager Menu"},
                    {src: "/ppe/ppe04.png", alt: "Help Menu"},
                    {src: "/ppe/ppe05.png", alt: "Custom Color input"},
                    {src: "/ppe/ppe06.png", alt: "Color Select Menu"},
                ]}
            />
            <MarkdownRenderer markdownContent={pixelpainterEnhancedMarkdown} />
        </>
    );
};

export default PixelPainterEnhanced;
