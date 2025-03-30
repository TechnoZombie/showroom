import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import pixelpainterEnhancedMarkdown from "./markdownFiles/pixelpainter-enhanced-markdown.js";
import ImageGallery from "./ImageGallery.jsx";

const PixelPainterEnhanced = () => {
    return (
        <div className="readme-container">
            <ImageGallery
                images={[
                    {src: "public/ppe/ppe01.png", alt: "Main Screen"},
                    {src: "public/ppe/ppe02.png", alt: "Edit Menu"},
                    {src: "public/ppe/ppe03.png", alt: "Manager Menu"},
                    {src: "public/ppe/ppe04.png", alt: "Help Menu"},
                    {src: "public/ppe/ppe05.png", alt: "Custom Color input"},
                    {src: "public/ppe/ppe06.png", alt: "Color Select Menu"},
                ]}
            />
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    code({node, inline, className, children, ...props}) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <SyntaxHighlighter
                                style={vscDarkPlus}
                                language={match[1]}
                                PreTag="div"
                                {...props}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {pixelpainterEnhancedMarkdown}
            </ReactMarkdown>
        </div>
    );
};

export default PixelPainterEnhanced;