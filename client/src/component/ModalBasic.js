import styles from '../styles/ModalBasic.module.css';
import { useState } from 'react';
import { axios_put } from '../api/api';

function ModalBasic({ setModalOpen, selectedList }) {
  const courseId = selectedList[0];
  const classId = selectedList[1];
  const [modifytitle, setModifyTitle] = useState(selectedList[2]);
  const [modifyCapacity, setModifyCapacity] = useState(selectedList[3]);
  // 모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };
  const changeTitle = (event) => {
    setModifyTitle(event.target.value);
  };
  const changeCapacity = (event) => {
    setModifyCapacity(event.target.value);
  };
  const submit = () => {
    // TODO 수정하기
    const reponse = axios_put('courses', {
      name: modifytitle,
      courseNumber: Number(courseId),
      classNumber: Number(classId),
      capacity: modifyCapacity,
    });
    if (reponse.status === 204) {
      alert('수정완료');
      closeModal();
    } else {
      alert('수정실패');
    }
  };
  return (
    <div className={styles.container}>
      <button className={styles.close} onClick={closeModal}>
        X
      </button>
      <div className={styles.mydiv}>
        <p>
          <span>과목번호 : </span>
          {courseId}
        </p>
        <p>
          <span>분반 : </span>
          {classId}
        </p>
        <label>과목명 : </label>
        <input
          type="text"
          value={modifytitle}
          onChange={(event) => changeTitle(event)}
        ></input>
        <br />
        <label>수강인원 : </label>
        <input
          type="number"
          value={modifyCapacity}
          onChange={(event) => changeCapacity(event)}
        ></input>
        <br />
        <button onClick={submit}>수정하기</button>
      </div>
    </div>
  );
}
export default ModalBasic;
