import { useState, useEffect } from 'react';

function LookUp() {
  const THEAD_LIST = [
    '학년',
    '과목이름',
    '과목번호',
    '분반',
    '교수',
    '정원',
    '취소',
  ];
  const [userEnrolment, setUserEnrolment] = useState();
  const cancleEvnet = () => {
    if (window.confirm('선택한 과목을 수강 취소하시겠습니까?')) {
      // TODO 취소 선택시 취소 보내기
      // TODO 취소 선택시 데이터 변경 화면 렌더링
      console.log('취소');
    }
  };
  return (
    <div>
      <h1>신청내역 조회</h1>
      <table>
        <thead>
          <tr>
            {THEAD_LIST.map((data, idx) => (
              <td key={idx}>{data}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>소프트웨어공학</td>
            <td>1000-1234</td>
            <td>00</td>
            <td>김현수</td>
            <td>40/40</td>
            <td>
              <button onClick={cancleEvnet}>취소</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LookUp;
