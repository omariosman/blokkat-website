import React, { useState, useEffect } from "react";

const ImageCarousel = ({ basePath }) => {
  const [images, setImages] = useState([]);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch(`/api/images?basePath=${basePath}`);
        const imageList = await response.json();
        const fetchedImages = imageList.map((image) => `${basePath}/${image}`);

        if (fetchedImages.length > 0) {
          setImages(fetchedImages);
          //const initialIdx = Math.floor(fetchedImages.length / 2); 
          setMainImage(fetchedImages[0]);
        }
      } catch (error) {
        console.error("Error loading images:", error);
      }
    };

    loadImages();
  }, [basePath]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <div className="carousel-container">
      {/* Main Image */}
      <div className="main-image-wrapper">
        {mainImage && (
          <img
            src={mainImage}
            alt="Main"
            className="main-image"
          />
        )}
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
