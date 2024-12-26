import React, { useState, useEffect } from "react";

import "./Carousel.css";

// Importa las imágenes
import image1 from "../../assets/Images/chevrolet1.png";
import image2 from "../../assets/Images/chevrolet2.png";
import image3 from "../../assets/Images/chevrolet3.png";
import image4 from "../../assets/Images/chevrolet4.png";
import image5 from "../../assets/images/mazda1.png";
import image6 from "../../assets/images/mazda2.png";
import image7 from "../../assets/images/mazda3.png";
import image8 from "../../assets/images/mazda4.png";
import image9 from "../../assets/images/ford1.png";
import image10 from "../../assets/images/ford2.png";
import image11 from "../../assets/images/ford3.png";
import image12 from "../../assets/images/ford4.png";

const images = [
    { src: image1, alt: "Imagen 1 - Descripción breve para SEO" },
    { src: image2, alt: "Imagen 2 - Descripción breve para SEO" },
    { src: image3, alt: "Imagen 3 - Descripción breve para SEO" },
    { src: image4, alt: "Imagen 4 - Descripción breve para SEO" },
    { src: image5, alt: "Imagen 5 - Descripción breve para SEO" },
    { src: image6, alt: "Imagen 6 - Descripción breve para SEO" },
    { src: image7, alt: "Imagen 7 - Descripción breve para SEO" },
    { src: image8, alt: "Imagen 8 - Descripción breve para SEO" },
    { src: image9, alt: "Imagen 9 - Descripción breve para SEO" },
    { src: image10, alt: "Imagen 10 - Descripción breve para SEO" },
    { src: image11, alt: "Imagen 11 - Descripción breve para SEO" },
    { src: image12, alt: "Imagen 12 - Descripción breve para SEO" },
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    // Autoplay: Cambia automáticamente la imagen cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Limpia el intervalo al desmontar
    }, []);

    // Función para cambiar manualmente de imagen
    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    // Manejo de deslizamiento táctil
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    const handleTouchEnd = () => {
        const swipeDistance = touchStartX - touchEndX;

        // Desliza a la izquierda
        if (swipeDistance > 50) {
            goToSlide((currentIndex + 1) % images.length);
        }

        // Desliza a la derecha
        if (swipeDistance < -50) {
            goToSlide((currentIndex - 1 + images.length) % images.length);
        }

        // Reinicia los valores táctiles
        setTouchStartX(0);
        setTouchEndX(0);
    };

    return (
        <section id="inicio" className="carousel" role="region" aria-label="Galería de imágenes de autos"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="carousel-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                        loading="lazy"
                    />
                ))}
            </div>
            <nav className="carousel-indicators" aria-label="Indicadores de carrusel">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`indicator ${index === currentIndex ? "active" : ""}`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                    />
                ))}
            </nav>
            <div className="carousel-navigation">
                <button
                    onClick={() => goToSlide((currentIndex - 1 + images.length) % images.length)}
                    aria-label="Imagen anterior"
                >
                    &#10094;
                </button>
                <button
                    onClick={() => goToSlide((currentIndex + 1) % images.length)}
                    aria-label="Imagen siguiente"
                >
                    &#10095;
                </button>
            </div>
        </section>
    );
}

export default Carousel;