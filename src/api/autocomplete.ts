import { API } from 'api/unsplash';

const autoComplete = (query: string) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const response = await API({
        method: 'GET',
        url: `https://unsplash.com/nautocomplete/${query}`,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export default autoComplete;
