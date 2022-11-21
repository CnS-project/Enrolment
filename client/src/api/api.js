import axios from 'axios';

const baseUrl = 'http://localhost:3000';
const subUrl = {
  login: '/login',
};

export const axios_post = async (url, sendData) => {
  try {
    const response = await axios.post(
      `${baseUrl}${subUrl[url]}`,
      JSON.stringify(sendData),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return response;
  } catch (err) {
    console.log('post통신에러: ' + err);
  }
};

export const axios_get = async (url, sendData) => {
  try {
    const response = await axios.get(
      `${baseUrl}${subUrl[url]}`,
      { params: sendData },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (err) {
    console.log('get통신에러 : ' + err);
  }
};
