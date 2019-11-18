const axios = require("axios");

export function data() {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
}
