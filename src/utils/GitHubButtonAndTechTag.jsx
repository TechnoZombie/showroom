import React from 'react';
import PropTypes from 'prop-types';
import Button from "../components/Button.jsx";
import {FaGithub} from "react-icons/fa";

function GitHubButtonAndTechTag({link, techs}) {
    const badgeLinks = {
        javascript: "https://img.shields.io/badge/javascript-gray?logo=javascript",
        java: "https://img.shields.io/badge/java-red?logo=java",
        react: "https://img.shields.io/badge/react-gray?logo=react",
        vite: "https://img.shields.io/badge/vite-gray?logo=vite"
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingBottom: '0.5%'
            }}
        >
            <Button
                className={"viewOnGithub-button"}
                link={link}
            >
                <FaGithub/> View on GitHub
            </Button>

            <div style={{display: 'flex', gap: '2.5%', marginTop: '0.1%'}}>
                {techs.map((tech) => {
                    const imageSrc = badgeLinks[tech];
                    return imageSrc ? (
                        <img key={tech} src={imageSrc} alt={`${tech} badge`}/>
                    ) : (
                        <span key={tech}>Unknown: {tech}</span>
                    );
                })}
            </div>
        </div>
    );
}

GitHubButtonAndTechTag.propTypes = {
    link: PropTypes.string.isRequired,
    techs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default GitHubButtonAndTechTag;
