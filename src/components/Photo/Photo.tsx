import React, { useRef, useEffect, useState } from 'react';
import { PhotoType } from 'types/photo';
import styles from 'components/Photo/Photo.module.css';
import { decode } from 'blurhash';
import { useSpring, animated } from 'react-spring/web';

type PhotoPropsType = {
  photo: PhotoType;
};

const Photo: React.FunctionComponent<PhotoPropsType> = ({ photo }) => {
  const [isLoaded, setLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pixels = decode(photo.blur_hash, 300, 150);
  const props = useSpring({ opacity: isLoaded ? 1 : 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext('2d');
      const imageData = ctx?.createImageData(300, 150);
      if (imageData && ctx) {
        imageData.data.set(pixels);
        ctx.putImageData(imageData, 0, 0);
      }
    }
  }, [pixels]);

  return (
    <div className={styles.photo}>
      <canvas ref={canvasRef}></canvas>
      <picture>
        <source media="(max-width: 200px)" srcSet={photo.urls.thumb} />
        <source media="(max-width: 400px)" srcSet={photo.urls.small} />
        <animated.img
          style={props}
          onLoad={() => setLoaded(true)}
          src={photo.urls.regular}
          alt={photo.description || photo.alt_description}
        />
      </picture>
    </div>
  );
};

export default Photo;
