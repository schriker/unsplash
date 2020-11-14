import React from 'react';
import { useTypedSelector } from 'store/rootReducer';
import styles from 'components/LightBox/LightBox.module.css';
import { Blurhash } from 'react-blurhash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { closeLightBox } from 'store/slices/lightboxSlice';
import useBodyClass from 'hooks/useBodyClass';

const LightBox = () => {
  useBodyClass('overflow-hidden');
  const dispatch = useDispatch();
  const lightBox = useTypedSelector((state) => state.lightBox);

  return (
    lightBox.photo && (
      <div className={styles.wrapper}>
        <div onClick={() => dispatch(closeLightBox())} className={styles.backdrop}></div>
        <div className={styles.header}>
          <div className={styles.author}>
            <img src={lightBox.photo.user.profile_image.small} alt="" />
            <span>{lightBox.photo.user.name}</span>
            <span>
              {lightBox.photo.location?.name || lightBox.photo.user.location}
            </span>
          </div>
          <button onClick={() => dispatch(closeLightBox())}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className={styles.photo}>
          <Blurhash
            hash={lightBox.photo.blur_hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
          <picture>
            <source
              media="(max-width: 200px)"
              srcSet={`${lightBox.photo.urls.raw}"&w=600, ${lightBox.photo.urls.raw}"&w=600&dpr=2 2x`}
            />
            <source
              media="(max-width: 400px)"
              srcSet={`${lightBox.photo.urls.raw}"&w=800, ${lightBox.photo.urls.raw}"&w=800&dpr=2 2x`}
            />
            <source
              media="(min-width: 400px)"
              srcSet={`${lightBox.photo.urls.raw}"&w=1080, ${lightBox.photo.urls.raw}"&w=1080&dpr=2 2x`}
            />
            <img
              width={lightBox.photo.width}
              height={lightBox.photo.height}
              src={`${lightBox.photo.urls.raw}&w=1080`}
              alt=""
            />
          </picture>
        </div>
      </div>
    )
  );
};

export default LightBox;
