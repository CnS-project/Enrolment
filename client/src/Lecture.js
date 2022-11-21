export default function Leacture() {
  return (
    <div>
      <h1>수강 신청</h1>
      <div>
        <label>
          검색 : <input type="text" />
        </label>
        <br />
        <label>
          과목 번호-분반 <input type="text" id="lecture-number" />
          <span> - </span>
          <input type="text" id="lecture-class-number" />
          <button type="submit">신청</button>
        </label>
      </div>

      <table id="lecture-table">
        <th>
          <td>신청</td>
          <td>과목 이름</td>
          <td>과목 번호</td>
          <td>학과</td>
          <td>학년</td>
          <td>교수</td>
        </th>
      </table>
    </div>
  );
}
