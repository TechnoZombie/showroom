import React from 'react';
import { motion } from "framer-motion";

function Intro() {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <div className="main-content">
                <h1>Intro Page.</h1>
            </div>
        </motion.div>
    );
}

export default Intro;