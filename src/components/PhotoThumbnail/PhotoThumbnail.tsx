import React from 'react';
import { Blurhash } from 'react-blurhash';
import { PhotoType } from 'types/photo';
import styles from 'components/PhotoThumbnail/PhotoThumbnail.module.css';

type PhotoThumbnailPropsType = {
  photo: PhotoType;
};

const PhotoThumbnail: React.FunctionComponent<PhotoThumbnailPropsType> = ({
  photo,
}) => {
  return (
    <div className={styles.wrapper}>
      <Blurhash
        hash={photo.blur_hash}
        width="100%"
        height="100%"
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <img
        src={photo.urls.regular}
        alt={photo.description || photo.alt_description}
      />
    </div>
  );
};

export default PhotoThumbnail;
