import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 50,
  },
  url: 'https://youtube-v31.p.rapidapi.com/captions',

  headers: {
    'X-RapidAPI-Key': '0e775d38damsh312b38c4f07187ep17a05ejsn994883147928',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};