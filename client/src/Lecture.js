import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  getAllCourses,
  getFilteredCourses,
  logOut,
  registerCourse,
} from './api/api';
import './styles/lecture.css';
export default function Leacture() {
  const THEAD_LIST = [
    { key: 'register', title: '신청' },
    { key: 'name', title: '과목' },
    { key: 'courseNumber', title: '과목 번호' },
    { key: 'classNumber', title: '분반' },
    { key: 'department', title: '학과' },
    { key: 'targetGrade', title: '학년' },
    { key: 'professor', title: '교수' },
    { key: 'credit', title: '학점' },
    { key: 'capacity', title: '정원' },
  ];
  const [word, setWord] = useState('');
  const [courses, setCourses] = useState([]);
  const [courseNumber, setCourseNumber] = useState('');
  const [classNumber, setClassNumber] = useState('');
  const [sortTarget, setsortTarget] = useState({ key: 'name', count: 0 });
  const [selectedSort, setSelectedSort] = useState('name');
  const arrowMark = ['', '↑', '↓'];

  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res);
    });
  }, []);
  useEffect(() => {
    if (courses !== [])
      setCourses((prev) =>
        [...prev].sort((a, b) => {
          if (sortTarget.count === 0 || sortTarget.count === 1) {
            return a[sortTarget.key] > b[sortTarget.key] ? 1 : -1;
          } else if (sortTarget.count === 2) {
            return b[sortTarget.key] > a[sortTarget.key] ? 1 : -1;
          }
        }),
      );
  }, [sortTarget]);
  return (
    <div>
      <h1>수강 신청</h1>
      <div>
        <div>
          <select onChange={(e) => setSelectedSort(e.target.value)}>
            <option value="name">과목</option>
            <option value="courseNumber">과목 번호</option>
            <option value="professor">교수명</option>
            <option value="grade">학년</option>
            <option value="major">학과</option>
          </select>{' '}
          :{' '}
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />{' '}
          <button
            onClick={async () => {
              const filteredData = await getFilteredCourses({
                [selectedSort]: word,
              });
              setCourses(filteredData);
            }}
          >
            검색
          </button>
        </div>
        <br />
        <label>
          과목 번호-분반{' '}
          <input
            type="text"
            className="lecture-number"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
          />
          <span> - </span>
          <input
            type="text"
            id="lecture-class-number"
            value={classNumber}
            onChange={(e) => setClassNumber(e.target.value)}
          />
          <button
            type="submit"
            onClick={() => registerCourse({ courseNumber, classNumber })}
          >
            신청
          </button>
        </label>
      </div>
      <div>항목 클릭 시 정렬 가능</div>
      <table id="lecture-table">
        <thead>
          <tr>
            {THEAD_LIST.map(({ key, title }, index) => (
              <th
                key={title}
                onClick={() => {
                  if (index !== 0)
                    setsortTarget((prev) => {
                      if (prev.key === key)
                        return { ...prev, count: (prev.count + 1) % 3 };
                      return { key, count: 1 };
                    });
                }}
              >
                {sortTarget.key === key
                  ? title + arrowMark[sortTarget.count]
                  : title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => {
            const {
              targetGrade,
              credit,
              name,
              courseNumber,
              classNumber,
              professor,
              capacity,
            } = course;
            return (
              <tr key={'key' + course.courseNumber + course.classNumber}>
                <td>
                  <button
                    onClick={() =>
                      registerCourse({ courseNumber, classNumber })
                    }
                  >
                    신청
                  </button>
                </td>
                <td>
                  <span>{name}</span>
                </td>
                <td>
                  <span>{courseNumber}</span>
                </td>
                <td>
                  <span>{classNumber}</span>
                </td>
                <td>
                  <span>컴퓨터융합학부</span>
                </td>
                <td>
                  <span>{targetGrade}</span>
                </td>
                <td>
                  <span>{professor}</span>
                </td>
                <td>
                  <span>{credit}</span>
                </td>
                <td>
                  <span>{capacity}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
