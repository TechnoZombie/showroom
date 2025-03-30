import React from 'react';
import {motion} from "framer-motion";

function About() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <div className="main-content">
                <p>Placeholder.</p>
                <p>Lorem ipsum whatever the fucks</p>
            </div>
        </motion.div>
    );
}

export default About;