import axios from 'axios';

const baseUrl = 'http://15.164.41.8:8080';
const subUrl = {
  login: '/login',
  courses: '/courses',
  register: '/users/registration-course',
  filter: '/users/filtering',
};

export const axios_post = async (url, sendData) => {
  try {
    const response = await axios.post(`${baseUrl}${subUrl[url]}`, sendData, {
      headers: {
        'Content-Type': 'application/json',
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
    return response;
  } catch (err) {
    console.log('get통신에러 : ' + err);
  }
};

export const getAllCourses = async () => {
  try {
    const courses = await axios_get('courses');
    return courses.data.courses;
  } catch (err) {
    console.log(err);
  }
};

export const registerCourse = async (sendData) => {
  try {
    console.log(sendData);
    const response = await axios_post('register', sendData);
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const getFilteredCourses = async (word) => {
  try {
    const sendData = {
      courseNumber: '',
      name: '',
      professor: '',
      grade: '',
      major: '',
      ...word,
    };
    const courses = await axios_get('filter', sendData);
    return courses.data;
  } catch (err) {
    console.log('get통신에러 : ' + err);
  }
};
