export interface IProduct {
  id?: number;
  title: string;
  price: number | string;
  description: string;
  category: string;
  image: string;
  rating: {
    count: number;
    rate: number;
  };
  date?: Date;
  sale?: boolean;
  notification?: boolean;
}

export type Product = {
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
  date: string;
  sale: boolean;
  notification: boolean;
  [key: string]: string | boolean;
};

export interface IResponse {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number | null;
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
