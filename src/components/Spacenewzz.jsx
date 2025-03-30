import React from 'react';
import { motion } from "framer-motion";

const Spacenewzz = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <div style={{width: '100vw', height: '100vh'}}>
                <iframe
                    src="https://technozombie.github.io/spacenewzz/"
                    title="Spacenewzz"
                    width="100%"
                    height="100%"
                    allowFullScreen
                ></iframe>

            </div>
        </motion.div>
    )
}

export default Spacenewzz;