import { useState } from 'react';
import './styles/lecture.css';
export default function Leacture() {
  const THEAD_LIST = ['신청', '과목', '과목', '분반', '학과', '학년', '교수'];
  const [leactureDatas, setLeactureDatas] = useState([]);

  return (
    <div>
      <h1>수강 신청</h1>
      <div>
        <label>
          검색 : <input type="text" />
        </label>
        <br />
        <label>
          과목 번호-분반 <input type="text" class="lecture-number" />
          <span> - </span>
          <input type="text" class="lecture-number" />
          <span> - </span>
          <input type="text" id="lecture-class-number" />
          <button type="submit">신청</button>
        </label>
      </div>

      <table id="lecture-table">
        <thead>
          {THEAD_LIST.map((title) => (
            <td>{title}</td>
          ))}
        </thead>
        <tbody>
          <tr>
            <td>
              <button>신청</button>
            </td>
            <td>
              <span>소프트웨어공학</span>
            </td>
            <td>
              <sapn>1000-1234</sapn>
            </td>
            <td>
              <sapn>00</sapn>
            </td>
            <td>
              <span>컴퓨터융합학부</span>
            </td>
            <td>
              <span>1</span>
            </td>
            <td>
              <span>김현수</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
