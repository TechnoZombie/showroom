import React from 'react';
import Button from "./Button.jsx";
import "./Sidebar.css";

function Sidebar() {
    return (

        <div className="sidebar-container">
        <div className="vertical-buttons">

            <Button
                children={"About"}
                link="#about"
            />

            <Button
                children={"Currency Converter"}
                link="#currencyConverter"
            />

            <Button
                children={"Chuck Norris: Facts."}
                link="#chuckNorris"
                />

            <Button
                children={"GitHub Repo"}
                link="https://github.com/technozombie"
            />
        </div>
        </div>
    );
}

Sidebar.propTypes = {};

export default Sidebar;