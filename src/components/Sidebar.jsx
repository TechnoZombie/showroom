import React from 'react';
import Button from "./Button.jsx";
import "../css/Sidebar.css";
import PixelPainterEnhanced from "./PixelPainterEnhanced.jsx";

function Sidebar() {
    return (

        <div className="sidebar-container">
            <div className="vertical-buttons">

                <Button
                    className={"sidebar-button"}
                    children={"Home"}
                    link="/Home"
                />
                <Button
                    className={"sidebar-button"}
                    children={"About"}
                    link="/About"
                />

                <Button
                    className={"sidebar-button"}
                    children={".this"}
                    link="/.this"
                />

                <Button
                    className={"sidebar-button"}
                    children={"Currency Converter"}
                    link="/CurrencyConverter"
                />

                <Button
                    className={"sidebar-button"}
                    children={"QRCode Generator"}
                    link="/QRCodeGenerator"
                />

                <Button
                    className={"sidebar-button"}
                    children={"Chuck Norris: Facts."}
                    link="/ChuckNorrisFacts"
                />

                <Button
                    className={"sidebar-button"}
                    children={"Spacenewzz"}
                    link="/Spacenewzz"
                />

                <Button
                    className={"sidebar-button"}
                    children={"PixelPainter"}
                    link="/PixelPainter"
                />

                <Button
                    className={"sidebar-button"}
                    children={"PixelPainter: Enhanced!"}
                    link="/PixelPainterEnhanced"
                />

                <Button
                    className={"sidebar-button"}
                    children={"Simplegraphz"}
                    link="/Simplegraphz"
                />
                <Button
                    className={"sidebar-button"}
                    children={"Visit GitHub Repo"}
                    link="https://github.com/technozombie"
                />
            </div>
        </div>
    );
}

Sidebar.propTypes = {};

export default Sidebar;