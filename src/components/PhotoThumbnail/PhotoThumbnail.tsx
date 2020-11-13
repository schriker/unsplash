import React from 'react';
import { openLightBox } from 'store/slices/lightboxSlice';
import { Blurhash } from 'react-blurhash';
import { PhotoType } from 'types/photo';
import styles from 'components/PhotoThumbnail/PhotoThumbnail.module.css';
import { useDispatch } from 'react-redux';

type PhotoThumbnailPropsType = {
  photo: PhotoType;
  index: number;
};

const PhotoThumbnail: React.FunctionComponent<PhotoThumbnailPropsType> = ({
  photo,
  index,
}) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(openLightBox({ photo, index }));
  };

  return (
    <div onClick={handleOnClick} className={styles.wrapper}>
      {photo.blur_hash.length >= 6 && (
        <Blurhash
          hash={photo.blur_hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
      <img
        loading="lazy"
        width={photo.width}
        height={photo.height}
        src={photo.urls.regular}
        alt=""
      />
      <div className={styles.author}>
        <img src={photo.user.profile_image.small} alt="" />
        <span>{photo.user.name}</span>
      </div>
    </div>
  );
};

export default PhotoThumbnail;
