function Button({ label, link, id, onClick }) {
    // Check if it's an external link (starts with http/https or contains a domain)
    const isExternal = link.startsWith('http') || link.includes('.');

    if (isExternal) {
        return (
            <a href={link.startsWith('http') ? link : `https://${link}`}
               className="Button"
               id={id}
               onClick={onClick}
               target="_blank"
               rel="noopener noreferrer">
                {label}
            </a>
        );
    }

    return (
        <Link to={link} className="Button" id={id} onClick={onClick}>
            {label}
        </Link>
    );
}

export default Button;