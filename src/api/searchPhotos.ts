import { API } from 'api/unsplash';
import { searchQueryType } from 'types/api';
import qs from 'qs';
import { PhotoType } from 'types/photo';

const searchPhotos = (query: searchQueryType) => {
  return new Promise<PhotoType[]>(async (resolve, reject) => {
    try {
      const response = await API.get(`/search/photos?${qs.stringify(query)}`);
      resolve(response.data.results);
    } catch (error) {
      reject(error);
    }
  });
};

export default searchPhotos;
