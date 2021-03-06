import { useState } from 'react';
import useConstant from 'use-constant';
import { useAsync } from 'react-async-hook';
import AwesomeDebouncePromise from 'awesome-debounce-promise';

const useDebouncedSearch = (searchFunction: any) => {
  const [inputText, setInputText] = useState('');

  const debouncedSearchFunction = useConstant(() =>
    AwesomeDebouncePromise(searchFunction, 300)
  );

  const searchResults = useAsync(async () => {
    if (inputText.length < 3) {
      return [];
    } else {
      return debouncedSearchFunction(inputText);
    }
  }, [debouncedSearchFunction, inputText]);

  return {
    inputText,
    setInputText,
    searchResults,
  };
};

export default useDebouncedSearch;
