import React from 'react';

const ChuckNorrisFacts = () => {
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <iframe
                src="https://technozombie.github.io/chuckNorrisFacts/"
                title="Chuck Norris: Facts."
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default ChuckNorrisFacts;