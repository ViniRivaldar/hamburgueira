import axios from 'axios';


const AxiosProducts = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_PRODUCTS,
});


const AxiosAuth = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_AUTH,
});

export { AxiosProducts, AxiosAuth };
