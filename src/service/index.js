import axios from 'axios';

const url = 'https://api.github.com';

export default axios.create({
  baseURL: url,
});
