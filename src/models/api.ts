export type SearchParams = {
  method: string;
  api_key: string;
  format: string;
  nojsoncallback: string;
  [key: string]: string;
};

export type SearchPhotosParams = {
  tags: string;
  extras: string;
  page: string;
  sort: string;
  per_page: string;
  [key: string]: string;
};
