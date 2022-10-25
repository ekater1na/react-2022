export type Product = {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: FileList;
  date: string;
  sale: boolean;
  notification: boolean;
  [key: string]: string | boolean | FileList;
};

export interface IResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: ICharacter[];
}

export interface ICharacter {
  id: number;
  name: string;
  created: string;
  episode: string[];
  gender: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}
