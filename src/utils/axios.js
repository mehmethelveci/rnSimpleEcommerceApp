import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://5e394071aad22200149625f8.mockapi.io/',
  timeout: 1000,
});


const axiosRequest = {
  get: (url) => {
    if (__DEV__) {
      console.log('api request:', url);
    }

    return new Promise((resolve, reject) => {
      instance.get(url).then((response) => {
        if (__DEV__) {
          console.log('api response:', response);
        }
        resolve(response);
      }).catch((error) => {
        if (__DEV__) {
          console.log('api error:', error);
        }
        reject(error);
      });
    });
  },
};

export default axiosRequest;
