import React from 'react';
import Button from "./Button.jsx";
import "../css/Sidebar.css";
import PixelPainterEnhanced from "./PixelPainterEnhanced.jsx";

function Sidebar() {
    return (

        <div className="sidebar-container">
            <div className="vertical-buttons">

                <Button
                    children={"Home"}
                    link="/Home"
                />
                <Button
                    children={"About"}
                    link="/About"
                />

                <Button
                    children={".this"}
                    link="/.this"
                />

                <Button
                    children={"Currency Converter"}
                    link="/CurrencyConverter"
                />

                <Button
                    children={"QRCode Generator"}
                    link="/QRCodeGenerator"
                />

                <Button
                    children={"Chuck Norris: Facts."}
                    link="/ChuckNorrisFacts"
                />

                <Button
                    children={"Spacenewzz"}
                    link="/Spacenewzz"
                />

                <Button children={"PixelPainter"}
                        link="/PixelPainter"
                />

                <Button children={"PixelPainter: Enhanced!"}
                        link="/PixelPainterEnhanced"
                />

                <Button children={"Simplegraphz"}
                        link="/Simplegraphz"
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