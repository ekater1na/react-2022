export type SearchParams = {
  method: string;
  api_key: string;
  format: string;
  nojsoncallback: string;
};

export type SearchPhotosParams = {
  tags: string;
  extras: string;
  page: number;
  sort: string;
  per_page: number;
};
