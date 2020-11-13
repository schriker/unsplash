import React from 'react';
import styles from 'components/SearchHeader/SearchHeader.module.css';
import { PhotoType } from 'types/photo';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhotoBackground from 'components/PhotoBackground/PhotoBackground';
import Search from 'components/Search/Search';

type SearchHeaderPropsType = {
  backgroundPhoto: PhotoType | null;
};

const SearchHeader: React.FunctionComponent<SearchHeaderPropsType> = ({
  backgroundPhoto,
}) => {
  const history = useHistory();

  return (
    <div className={styles.search}>
      {backgroundPhoto && (
        <div className={styles.searchMainPhoto}>
          <PhotoBackground photo={backgroundPhoto} />
        </div>
      )}
      <button onClick={() => history.push('/')} className={styles.backButton}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <Search />
    </div>
  );
};

export default SearchHeader;
