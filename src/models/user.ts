export type User = {
  id: string;
  username: string;
  country: string;
  image: string;
  date: string;
  hobby: string;
  gender: string;
  consent: boolean;
  [key: string]: string | boolean;
};
