import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from 'pages/home/Home.module.css';
import randomPhoto from 'api/randomPhoto';
import { PhotoType } from 'types/photo';
import Photo from 'components/Photo/Photo';

const Home = () => {
  const [backgroundPhoto, setBackgroundPhoto] = useState<PhotoType | null>(
    null
  );

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await randomPhoto();
        setBackgroundPhoto(response);
      } catch (error) {
        console.log("Couldn't fetch random photo!");
      }
    };

    fetchPhoto();
  }, []);

  return (
    <div
      className={styles.homePage}
      style={{ backgroundColor: backgroundPhoto ? backgroundPhoto.color : '' }}
    >
      <Helmet>
        <title>{`${process.env.REACT_APP_TITLE} - Home`}</title>
      </Helmet>
      {backgroundPhoto && <Photo photo={backgroundPhoto} />}
    </div>
  );
};

export default Home;
