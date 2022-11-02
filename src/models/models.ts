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
  photos: IItem;
  stat: string;
}

export interface IItem {
  page: number;
  pages: number;
  perpage: number;
  total: number;
  photo: IPhoto[];
}

export interface IPhoto {
  datetaken: string;
  datetakengranularity: number;
  datetakenunknown: string;
  farm: number;
  height_n: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  ownername: string;
  secret: string;
  server: string;
  title: string;
  url_n: string;
  views: string;
  width_n: number;
}
