import ArrowBack from "../assets/arrow_back.png"
import ArrowForward from "../assets/arrow_forward.png"
import LightBox from "./LightBox";
import React, { useState } from 'react';
import '../styles.css';

const Carousel = ({apartment}) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === apartment.pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? apartment.pictures.length - 1 : prevIndex - 1
        );
    };

    const toggleLightbox = () => {
        setLightboxVisible(!lightboxVisible);
    }

    return(
		<>
            <LightBox toggled={lightboxVisible} detoggle={toggleLightbox} aptImg={apartment.pictures[currentImageIndex]} alt={`Apartment ${currentImageIndex + 1}`}/>
            <div className="carousel">
				<div className="carousel-item">
					<img src={apartment.pictures[currentImageIndex]}  alt={`Apartment ${currentImageIndex + 1}`}  />
                    <button className="eye-icon" onClick={toggleLightbox}>
                        <img src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20fill='white'%20viewBox='0%200%20576%20512'%3e%3c!--!Font%20Awesome%20Free%206.7.2%20by%20@fontawesome%20-%20https://fontawesome.com%20License%20-%20https://fontawesome.com/license/free%20Copyright%202024%20Fonticons,%20Inc.--%3e%3cpath%20d='M288%2080c-65.2%200-118.8%2029.6-159.9%2067.7C89.6%20183.5%2063%20226%2049.4%20256c13.6%2030%2040.2%2072.5%2078.6%20108.3C169.2%20402.4%20222.8%20432%20288%20432s118.8-29.6%20159.9-67.7C486.4%20328.5%20513%20286%20526.6%20256c-13.6-30-40.2-72.5-78.6-108.3C406.8%20109.6%20353.2%2080%20288%2080zM95.4%20112.6C142.5%2068.8%20207.2%2032%20288%2032s145.5%2036.8%20192.6%2080.6c46.8%2043.5%2078.1%2095.4%2093%20131.1c3.3%207.9%203.3%2016.7%200%2024.6c-14.9%2035.7-46.2%2087.7-93%20131.1C433.5%20443.2%20368.8%20480%20288%20480s-145.5-36.8-192.6-80.6C48.6%20356%2017.3%20304%202.5%20268.3c-3.3-7.9-3.3-16.7%200-24.6C17.3%20208%2048.6%20156%2095.4%20112.6zM288%20336c44.2%200%2080-35.8%2080-80s-35.8-80-80-80c-.7%200-1.3%200-2%200c1.3%205.1%202%2010.5%202%2016c0%2035.3-28.7%2064-64%2064c-5.5%200-10.9-.7-16-2c0%20.7%200%201.3%200%202c0%2044.2%2035.8%2080%2080%2080zm0-208a128%20128%200%201%201%200%20256%20128%20128%200%201%201%200-256z'/%3e%3c/svg%3e" alt="eye icon" />
                    </button>
				</div> 
				<button className="back-arrow" onClick={prevImage} >
					<img src={ArrowBack} alt="back arrow" />
				</button>
				<button className="forward-arrow" onClick={nextImage}>
					<img src={ArrowForward} alt="forward arrow" />
				</button>
			</div>
        </>
    )
}

export default Carousel;