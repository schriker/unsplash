import { API } from 'api/unsplash';
import { PhotoType } from 'types/photo';

const randomPhoto = () => {
  return new Promise<PhotoType>(async (resolve, reject) => {
    try {
      const response = await API.get('/photos/random?orientation=landscape');
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};

export default randomPhoto;
