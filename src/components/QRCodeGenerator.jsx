import React from 'react';

const QRCodeGenerator = () => {
    return (
        <div>
            <iframe
                src="https://technozombie.github.io/QRCodeGenerator/"
                title="QRCode Generator"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default QRCodeGenerator;