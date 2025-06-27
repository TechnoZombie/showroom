// Utility to scroll component to top when it changes on Showcase component.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        const container = document.querySelector('.showcase');
        if (container) {
            container.scrollTop = 0;
        }
    }, [location.pathname]); // only run when route changes

    return null;
};

export default ScrollToTop;
