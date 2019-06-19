import config from '../config/development';
import axios from 'axios';

const giphyApi = searchParams => {
  const search = searchParams;
  const key = config.apiKey;
  const limit = 50;
  const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`

  return axios.get(url);
};

export default giphyApi;
