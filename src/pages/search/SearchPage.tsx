import React, { useEffect, useState } from 'react';
import styles from 'pages/search/SearchPage.module.css';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { PhotoType } from 'types/photo';
import searchPhotos from 'api/searchPhotos';
import SearchHeader from 'components/SearchHeader/SearchHeader';
import PhotoThumbnail from 'components/PhotoThumbnail/PhotoThumbnail';

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const [photos, setPhotos] = useState<PhotoType[] | null>(null);
  const [backgroundPhoto, setBackgroundPhoto] = useState<PhotoType | null>(
    null
  );

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await searchPhotos({
          query: query,
          page: 1,
          per_page: 20,
        });
        setBackgroundPhoto(response[0]);
        setPhotos(response);
      } catch (error) {
        console.log("Couldn't fetch photos!");
      }
    };
    setBackgroundPhoto(null);
    setPhotos(null);
    fetchPhoto();
  }, [query]);

  console.log(photos);

  return (
    <div>
      <Helmet>
        <title>{`${process.env.REACT_APP_TITLE} - Search: ${query}`}</title>
      </Helmet>
      <SearchHeader backgroundPhoto={backgroundPhoto} />
      <div className={styles.wrapper}>
        <h1>{query}</h1>
        {photos && (
          <div className={styles.grid}>
            {photos.map((photo) => (
              <PhotoThumbnail photo={photo} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
