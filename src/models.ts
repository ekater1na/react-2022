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