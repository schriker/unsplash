import React, { useState } from 'react';
import { PhotoType } from 'types/photo';
import styles from 'components/PhotoBackground/PhotoBackground.module.css';
import { Blurhash } from 'react-blurhash';
import { useSpring, animated } from 'react-spring/web';

type PhotoPropsType = {
  photo: PhotoType;
};

const Photo: React.FunctionComponent<PhotoPropsType> = ({ photo }) => {
  const [isLoaded, setLoaded] = useState(false);
  const props = useSpring({ opacity: isLoaded ? 1 : 0 });

  return (
    <div className={styles.photo}>
      <Blurhash
        hash={photo.blur_hash}
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <picture>
        <source
          media="(max-width: 200px)"
          srcSet={`${photo.urls.raw}"&w=600, ${photo.urls.raw}"&w=600&dpr=2 2x`}
        />
        <source
          media="(max-width: 400px)"
          srcSet={`${photo.urls.raw}"&w=800, ${photo.urls.raw}"&w=800&dpr=2 2x`}
        />
        <source
          media="(min-width: 400px)"
          srcSet={`${photo.urls.raw}"&w=1080, ${photo.urls.raw}"&w=1080&dpr=2 2x`}
        />
        <animated.img
          style={props}
          onLoad={() => setLoaded(true)}
          src={`${photo.urls.raw}&w=1080`}
          alt={photo.description || photo.alt_description}
        />
      </picture>
    </div>
  );
};

export default Photo;
