import { useState, useEffect } from 'react';
import {
  getAllCourses,
  getFilteredCourses,
  logOut,
  registerCourse,
} from './api/api';
import ModalBasic from './component/ModalBasic';

function Admin() {
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
    { key: 'delete', title: '삭제' },
  ];
  const [courses, setCourses] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedList, setSelectedList] = useState([]);

  const deleteCourse = (courseNumber, classNumber) => {};

  const showModal = (list) => {
    setSelectedList(list);
    setModalOpen(true);
  };

  useEffect(() => {
    getAllCourses().then((res) => {
      setCourses(res);
    });
  }, []);
  return (
    <div className="Admin">
      <h1>관리자페이지</h1>
      <div>
        <p>수강 신청 시간 설정</p>
      </div>
      <div>
        {modalOpen && (
          <ModalBasic setModalOpen={setModalOpen} selectedList={selectedList} />
        )}
      </div>
      <div>
        <p>강의목록</p>
        <table id="lecture-table">
          <thead>
            <tr>
              {THEAD_LIST.map(({ key, title }, index) => (
                <th key={key}>{title}</th>
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
                        showModal([
                          course.courseNumber,
                          course.classNumber,
                          name,
                          capacity,
                        ])
                      }
                    >
                      강의 수정
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
                  <td>
                    <button
                      onClick={(courseNumber, classNumber) =>
                        deleteCourse(courseNumber, classNumber)
                      }
                    >
                      강의 삭제
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
