import axiosRequest from '../utils/axios';

const products = () => axiosRequest.get('products');
const hotdeals = () => axiosRequest.get('hotdeals');
const productTimings = () => axiosRequest.get('productTimings');

export {
  products,
  hotdeals,
  productTimings,
};
