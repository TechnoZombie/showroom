import React from 'react';
import { motion } from "framer-motion";

const QRCodeGenerator = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <div>
                <iframe
                    src="https://technozombie.github.io/QRCodeGenerator/"
                    title="QRCode Generator"
                    width="100%"
                    height="100%"
                    allowFullScreen
                ></iframe>
            </div>
        </motion.div>
    );
};

export default QRCodeGenerator;