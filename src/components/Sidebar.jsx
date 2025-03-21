import React from 'react';
import Button from "./Button.jsx";
import "./Sidebar.css";

function Sidebar() {
    return (

        <div className="sidebar-container">
            <div className="vertical-buttons">

                <Button
                    children={"Home"}
                    link="/"
                />
                <Button
                    children={"About"}
                    link="About"
                />

                <Button
                    children={"Currency Converter"}
                    link="CurrencyConverter"
                />

                <Button
                    children={"QRCode Generator"}
                    link="QRCodeGenerator"
                />

                <Button
                    children={"Chuck Norris: Facts."}
                    link="ChuckNorrisFacts"
                />

                <Button
                    children={"Visit GitHub Repo"}
                    link="https://github.com/technozombie"
                />
            </div>
        </div>
    );
}

Sidebar.propTypes = {};

export default Sidebar;