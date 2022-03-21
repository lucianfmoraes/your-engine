import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 6000,
  headers: {'X-Custom-Header': 'foobar', 'Accept': '*/*'},
});

export const customGet = async (endpoint) => {
  const res = await api.get(endpoint);
  return res.data;
}

export const customPost = async (endpoint, data) => {
  const res = await api.post(endpoint, data)
  return res.status
}

export const customPostJSON = async (endpoint, data) => {
  const res = await api.post(endpoint, data);
  return res;
}
