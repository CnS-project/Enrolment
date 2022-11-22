import { useEffect, useState } from 'react';
import { registerCourse } from './api/api';
import './styles/lecture.css';
export default function Leacture() {
  const THEAD_LIST = [
    '신청',
    '과목',
    '과목 번호',
    '분반',
    '학과',
    '학년',
    '교수',
    '학점',
    '정원',
  ];
  const [word, setWord] = useState('');
  const [courses, setCourses] = useState([]);
  const [courseNumber, setCourseNumber] = useState();
  const [classNumber, setClassNumber] = useState();
  const [sortTarget, setsortTarget] = useState({ thNumber: 0, count: 0 });
  const arrowMark = ['', '↑', '↓'];

  // useEffect(() => {
  //   setLeactureDatas((prev) => {
  //     return prev.sort((a, b) => {
  //       if (sortTarget.count === 1) {
  //         return a.thNumber - b.thNumber;
  //       } else if (sortTarget.count === 2) return b.thNumber - a.thNumber;
  //     });
  //   });
  // }, [sortTarget]);
  return (
    <div>
      <h1>수강 신청</h1>
      <div>
        <label>
          검색 :{' '}
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />{' '}
          <button>검색</button>
        </label>
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

      <table id="lecture-table">
        <thead>
          {THEAD_LIST.map((title, index) => (
            <td
              id={title}
              onClick={() => {
                setsortTarget((prev) => {
                  if (prev.thNumber === index)
                    return { ...prev, count: (prev.count + 1) % 3 };
                  return { thNumber: index, count: 1 };
                });
              }}
            >
              {sortTarget.thNumber === index
                ? title + arrowMark[sortTarget.count]
                : title}
            </td>
          ))}
        </thead>
        <tbody>
          <tr>
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
                <>
                  <td>
                    <button>신청</button>
                  </td>
                  <td>
                    <span>{name}</span>
                  </td>
                  <td>
                    <sapn>{courseNumber}</sapn>
                  </td>
                  <td>
                    <sapn>{classNumber}</sapn>
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
                </>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
