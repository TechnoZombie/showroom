import {useNavigate} from 'react-router-dom';

function Button({className, children, link, id, onClick, ariaCurrent}) {
    const navigate = useNavigate();

    // Use either the provided className or fall back to unstyled-button
    const buttonClass = className || "unstyled-button";

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
        <button className={buttonClass} id={id} onClick={handleClick} aria-current={ariaCurrent} type="button">
            {children}
        </button>
    );
}

export default Button;