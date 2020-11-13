const autoComplete = (query: string) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const response = await (await fetch(`/${query}`)).json();
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export default autoComplete;
