import { useNavigate } from 'react-router-dom';

function Button({ className, children, link, id, onClick }) {
    const navigate = useNavigate();

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
        <button className={className} id={id} onClick={handleClick}>
            {children}
        </button>
    );
}

export default Button;
