import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import styles from 'pages/search/SearchPage.module.css';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { PhotoType } from 'types/photo';
import searchPhotos from 'api/searchPhotos';
import SearchHeader from 'components/SearchHeader/SearchHeader';
import PhotoThumbnail from 'components/PhotoThumbnail/PhotoThumbnail';
import { useInView } from 'react-intersection-observer';
import random from 'helpers/random';

const SearchPage = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  const { query } = useParams<{ query: string }>();
  const [page, setPage] = useState<number>(1);
  const { ref, inView } = useInView({
    rootMargin: '0px 0px 300px 0px',
  });
  const [photos, setPhotos] = useState<PhotoType[] | null>(null);
  const [backgroundPhoto, setBackgroundPhoto] = useState<PhotoType | null>(
    null
  );

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await searchPhotos({
          query: query,
          page: page,
          per_page: 20,
        });
        if (response.length) {
          setPhotos((prevValue) => {
            setBackgroundPhoto(prevValue ? prevValue[0] : response[0]);
            return prevValue ? [...prevValue, ...response] : response;
          });
        } else {
          setPhotos([]);
        }
      } catch (error) {
        console.log("Couldn't fetch photos!");
      }
    };
    fetchPhoto();
  }, [query, page]);

  useEffect(() => {
    setBackgroundPhoto(null);
    setPhotos(null);
  }, [query]);

  useEffect(() => {
    if (inView) {
      setPage((prevValue) => prevValue + 1);
    }
  }, [inView]);

  return (
    <div>
      <Helmet>
        <title>{`${process.env.REACT_APP_TITLE} - Search: ${query}`}</title>
      </Helmet>
      <SearchHeader backgroundPhoto={backgroundPhoto} />
      <div className={styles.wrapper}>
        <h1>{query}</h1>
        <div className={styles.grid}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {photos
              ? photos.map((photo, index) => (
                  <PhotoThumbnail key={index} photo={photo} index={index} />
                ))
              : [...Array(10)].map((_, index) => (
                  <div
                    key={index}
                    style={{
                      backgroundColor: '#e3e3e3',
                      height: `${random(300, 600)}px`,
                    }}
                  ></div>
                ))}
          </Masonry>
        </div>
      </div>
      <div style={{ height: '20px' }} ref={ref}></div>
    </div>
  );
};

export default SearchPage;
