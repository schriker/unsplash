import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from 'pages/home/Home.module.css';
import randomPhoto from 'api/randomPhoto';
import { PhotoType } from 'types/photo';
import PhotoBackground from 'components/PhotoBackground/PhotoBackground';
import Search from 'components/Search/Search';

const HomePage = () => {
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
    <div className={styles.homePage}>
      <Helmet>
        <title>{`${process.env.REACT_APP_TITLE} - Home`}</title>
      </Helmet>
      {backgroundPhoto && (
        <div className={styles.homePagePhoto}>
          <PhotoBackground photo={backgroundPhoto} />
        </div>
      )}
      <div className={styles.homePageSearch}>
        <h1>Unsplash</h1>
        <p>The internet’s source of freely-usable images.</p>
        <p>Powered by creators everywhere.</p>
        <Search />
      {backgroundPhoto && <p>Photo of the Day by {backgroundPhoto.user.name}</p>}
      </div>
    </div>
  );
};

export default HomePage;
