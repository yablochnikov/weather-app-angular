export interface User {
  name: {
    first: string;
    last: string;
  };
  gender: string;
  email: string;
  picture: {
    large: string;
  };
  location: {
    coordinates: {
      latitude: string;
      longitude: string;
    };
    city: string;
    country: string;
  };
}

export interface UserResponse {
  results: User[];
}
