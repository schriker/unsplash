export type PhotoType = {
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  views: number;
  download: number;
  urls: PhotoUrls;
  user: PhotoUser;
  location: PhotoLocation;
  description: string;
  alt_description: string;
};

export type PhotoUrls = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
};

export type PhotoUser = {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
};

export type PhotoLocation = {
  title: string;
  name: string;
  city: string;
  country: string;
  position: {
    latitude: number;
    longitude: number;
  };
};
