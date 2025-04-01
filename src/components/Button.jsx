import {useNavigate} from 'react-router-dom';

function Button({className, children, link, id, onClick}) {
    const navigate = useNavigate();

    // Add a base class that all buttons will have
    const baseClass = "unstyled-button";
    // Combine the base class with any additional classes
    const buttonClass = className ? `${baseClass} ${className}` : baseClass;

    const handleClick = (e) => {
        if (onClick) onClick(e);

        if (link) {
            if (link.startsWith('http://') || link.startsWith('https://')) {
                window.open(link, '_blank', 'noopener,noreferrer');
            } else {
                navigate(link);
            }
        }
    };

    return (
        <button className={buttonClass} id={id} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;
