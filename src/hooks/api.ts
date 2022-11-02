import { SearchPhotosParams, SearchParams } from '../models/api';

const API_KEY = process.env.REACT_APP_API_KEY || '9254674086e76a903c4c78a40dd28805';

export async function api(method: string, params: SearchPhotosParams) {
  try {
    const url = new URL('https://www.flickr.com/services/rest');

    const flickrParams: SearchParams = {
      method: `flickr.${method}`,
      api_key: API_KEY,
      format: 'json',
      nojsoncallback: '1',
      ...params,
    };

    url.search = new URLSearchParams(flickrParams).toString();

    const response = await fetch(url.href);
    console.log(url.href);

    return await response.json();
  } catch (error) {
    throw error;
  }
}
