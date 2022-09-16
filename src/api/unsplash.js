import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID WGepB0HhM8OZuNkhDLVPjGzEewZFpaH8JZZZULfhb20',
  },
});
