import React from 'react';
import {motion} from "framer-motion";
import GitHubButtonAndTechTag from "../utils/GitHubButtonAndTechTag.jsx";

const link = "https://github.com/technozombie/CurrencyConverter";
const CurrencyConverter = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.3}}
        >
            <GitHubButtonAndTechTag
                link={link}
                techs={["javascript"]}/>

            <div style={{width: '100vw', height: '100vh'}}>
                <iframe
                    src="https://technozombie.github.io/CurrencyConverter/"
                    title="Currency Converter"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </motion.div>
    );
};

export default CurrencyConverter;
