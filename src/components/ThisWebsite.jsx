import React from 'react';
import { motion } from "framer-motion";

const ThisWebsite = () => {

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <p>this website. placeholder</p>
        </motion.div>
    );
};

export default ThisWebsite;