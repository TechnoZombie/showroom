import React, {useState} from "react";
import "../css/ImageGallery.css";
import Button from "./Button.jsx";
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";
import {IoClose} from "react-icons/io5";

export default function ImageGallery({images}) {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (index) => {
        setSelectedImage(index);
        document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = "auto";
    };

    const goToPrevious = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="gallery">
            {/* Thumbnail Grid */}
            <div className="thumbnail-grid">
                {images.map((image, index) => (
                    <div key={index} className="thumbnail-container" onClick={() => openLightbox(index)}>
                        <img src={image.src} alt={image.alt || `Image ${index + 1}`} className="thumbnail"/>
                    </div>
                ))}
            </div>

            {/* Lightbox Overlay */}
            {selectedImage !== null && (
                <div className="lightbox" onClick={closeLightbox}>

                    <Button className="close-btn"
                            onClick={closeLightbox}>
                        <IoClose/>
                    </Button>
                    
                    <Button className="nav-btn nav-btn-left"
                            onClick={goToPrevious}>
                        <FaArrowLeft/>
                    </Button>

                    <img src={images[selectedImage].src} alt={images[selectedImage].alt || `Image ${selectedImage + 1}`}
                         className="full-image"/>

                    <Button className="nav-btn nav-btn-right"
                            onClick={goToNext}>
                        <FaArrowRight/>
                    </Button>

                </div>
            )}
        </div>
    );
}
