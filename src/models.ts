export interface IProduct {
  id?: number;
  title: string;
  price: number;
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
