import axios from 'axios';

const baseUrl = 'http://localhost:3000';
const subUrl = {
  login: '/login',
  courses: '/courses',
  register: '/users/registration-course',
};

export const axios_post = async (url, sendData) => {
  try {
    const response = await axios.post(`${baseUrl}${subUrl[url]}`, sendData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
    return response;
  } catch (err) {
    console.log('get통신에러 : ' + err);
  }
};

export const getAllCourses = async () => {
  try {
    const courses = await axios_get('courses');
    // return courses;
  } catch (err) {
    console.log(err);
  }
};

export const registerCourse = async (sendData) => {
  try {
    const response = await axios_post('register', sendData);
  } catch (err) {
    console.log(err);
  }
};
