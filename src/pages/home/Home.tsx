import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import styles from 'pages/home/Home.module.css';
import randomPhoto from 'api/randomPhoto';
import { PhotoType } from 'types/photo';
import Photo from 'components/Photo/Photo';
import Search from 'components/Search/Search';

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
    <div className={styles.homePage}>
      <Helmet>
        <title>{`${process.env.REACT_APP_TITLE} - Home`}</title>
      </Helmet>
      {backgroundPhoto && (
        <div className={styles.homePagePhoto}>
          <Photo photo={backgroundPhoto} />
        </div>
      )}
      <div className={styles.homePageSearch}>
        <Search />
      </div>
    </div>
  );
};

export default Home;
