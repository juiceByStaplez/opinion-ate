import axios from 'axios';

const baseURL =
  'https://outside-in-dev-api.herokuapp.com/aPOBNe0wn2Bl9fbHOkUgNXXgaKSDT9qx';

const client = axios.create();

const api = {
  loadRestaurants() {
    return client.get(baseURL + '/restaurants').then(response => response.data);
  },
};

export default api;
