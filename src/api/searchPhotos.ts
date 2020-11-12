import { API } from 'api/unsplash';
import { searchQueryType } from 'types/api';
import qs from 'qs';

const searchPhotos = (query: searchQueryType) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const response = await API.get(`/search/photos${qs.stringify(query)}`);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export default searchPhotos;
