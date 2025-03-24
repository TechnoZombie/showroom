import React from 'react';

const CurrencyConverter = () => {
    return (
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
    );
};

export default CurrencyConverter;
