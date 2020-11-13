import React, { useState, useEffect } from 'react';
import styles from 'components/Search/Search.module.css';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDebouncedSearch from 'hooks/useDebouncedSearch';
import autoComplete from 'api/autocomplete';
import SearchAutocomplete from './SearchAutocomplete';
import { Autocomplete } from 'types/api';
import { useHistory } from 'react-router-dom';

const useSearch = () =>
  useDebouncedSearch((searchValue: string) => autoComplete(searchValue));

const Search = () => {
  const history = useHistory();
  const [autocomplete, setAutocomplete] = useState<Autocomplete[] | null>();
  const { inputText, setInputText, searchResults } = useSearch();

  const onChangeHanlder = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    if (searchResults.result && searchResults.result.autocomplete) {
      setAutocomplete(searchResults.result.autocomplete);
    } else if (inputText.length < 3) {
      setAutocomplete(null);
    }
  }, [searchResults.result, inputText]);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.length >= 3) {
      history.push(`/search/${inputText}`);
      setInputText('');
    }
  };

  return (
    <div className={styles.search}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={inputText}
          onChange={onChangeHanlder}
          type="text"
          placeholder="Search high-res photo."
        />
        <button className={styles.submit} type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        {!!inputText.length && (
          <button
            onClick={() => setInputText('')}
            className={styles.reset}
            type="reset"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        )}
      </form>
      {inputText.length >= 3 && autocomplete && (
        <SearchAutocomplete
          clearForm={() => setInputText('')}
          autocomplete={autocomplete}
        />
      )}
    </div>
  );
};

export default Search;
