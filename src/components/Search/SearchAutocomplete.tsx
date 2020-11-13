import React from 'react';
import styles from 'components/Search/SearchAutocomplete.module.css';
import { Link } from 'react-router-dom';
import { Autocomplete } from 'types/api';

type SearchAutocompletePropsType = {
  autocomplete: Autocomplete[];
  clearForm: () => void;
};

const SearchAutocomplete: React.FunctionComponent<SearchAutocompletePropsType> = ({
  autocomplete,
  clearForm,
}) => {
  return (
    <div className={styles.autocomplete}>
      {autocomplete.length ? (
        <ul>
          {autocomplete.map((item, index) => {
            return (
              <li key={index} onClick={clearForm}>
                <Link to={`/search/${item.query}`}>{item.query}</Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Couldn't find anything.</p>
      )}
    </div>
  );
};

export default SearchAutocomplete;
