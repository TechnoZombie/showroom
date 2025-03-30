import React, {useState} from "react";
import "../css/ImageGallery.css";

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
                    <button className="close-btn" onClick={closeLightbox}>×</button>
                    <button className="nav-btn left" onClick={goToPrevious}>‹</button>
                    <img src={images[selectedImage].src} alt={images[selectedImage].alt || `Image ${selectedImage + 1}`}
                         className="full-image"/>
                    <button className="nav-btn right" onClick={goToNext}>›</button>
                </div>
            )}
        </div>
    );
}
