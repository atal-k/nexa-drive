// src/components/common/ImageZoom.js
import React, { useState, useRef } from 'react';
import './ImageZoom.css';

const ImageZoom = ({
  src,
  alt,
  className = '',
  zoomLevel = 2.5,   // 2.5 = 2.5x magnification
  lensSize = 150,    // diameter in px (change this to make lens bigger)
  shape = 'circle',  // 'circle' or 'square'
}) => {
  const [isZooming, setIsZooming] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 }); // top-left of lens
  const [bgStyle, setBgStyle] = useState({ size: '0px 0px', posX: '0px', posY: '0px' });
  const imageRef = useRef(null);

  const handleMouseEnter = () => setIsZooming(true);
  const handleMouseLeave = () => setIsZooming(false);

  const handleMouseMove = (e) => {
    const img = imageRef.current;
    if (!img) return;

    // rect = displayed image position & size in the document (pixels)
    const rect = img.getBoundingClientRect();
    // mouse position relative to image top-left (0..rect.width, 0..rect.height)
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // ensure lensSize isn't larger than the image
    const safeLensSize = Math.min(lensSize, rect.width, rect.height);
    const halfLens = safeLensSize / 2;

    // clamp center so lens doesn't go outside image
    const centerX = Math.max(halfLens, Math.min(x, rect.width - halfLens));
    const centerY = Math.max(halfLens, Math.min(y, rect.height - halfLens));

    // top-left coordinates for the lens (relative to image)
    setLensPosition({ x: centerX - halfLens, y: centerY - halfLens });

    // ---- Pixel-based background math (reliable magnification) ----
    // Make the background image be the displayed image size * zoomLevel
    // This creates a bigger (magnified) background image in px
    const bgWidth = rect.width * zoomLevel;
    const bgHeight = rect.height * zoomLevel;

    // In the enlarged background, the point under the cursor is at:
    // (x * zoomLevel, y * zoomLevel).
    // We want that point to appear at the lens center (halfLens, halfLens).
    // Therefore the background top-left needs to be shifted so that:
    // background-position-x = -(x * zoomLevel - halfLens)
    const bgPosX = -(centerX * zoomLevel - halfLens);
    const bgPosY = -(centerY * zoomLevel - halfLens);

    setBgStyle({
      size: `${bgWidth}px ${bgHeight}px`,
      posX: `${bgPosX}px`,
      posY: `${bgPosY}px`,
    });
  };

  return (
    <div className={`image-zoom ${className}`} style={{ position: 'relative', display: 'inline-block' }}>
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="image-zoom__image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        draggable={false}
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {isZooming && (
        <div
          className="image-zoom__lens"
          style={{
            width: `${Math.min(lensSize, 9999)}px`,
            height: `${Math.min(lensSize, 9999)}px`,
            left: `${lensPosition.x}px`,
            top: `${lensPosition.y}px`,
            backgroundImage: `url(${src})`,
            backgroundSize: bgStyle.size,
            backgroundPosition: `${bgStyle.posX} ${bgStyle.posY}`,
            borderRadius: shape === 'circle' ? '50%' : '6px',
          }}
        />
      )}
    </div>
  );
};

export default ImageZoom;
