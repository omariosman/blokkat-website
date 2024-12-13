import React, { useState } from "react";

const ImageCarousel = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="carousel-container">
      {/* Main Image */}
      <div className="main-image-wrapper">
        <img
          src={mainImage}
          alt="Main"
          className="main-image"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="thumbnail-wrapper">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail-image ${image === mainImage ? "active-thumbnail" : ""}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>

  );
};

export default ImageCarousel;
