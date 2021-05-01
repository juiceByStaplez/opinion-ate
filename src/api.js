import axios from 'axios';

const client = axios.create({
  baseUrl:
    'https://outside-in-dev-api.herokuapp.com/aPOBNe0wn2Bl9fbHOkUgNXXgaKSDT9qx',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
