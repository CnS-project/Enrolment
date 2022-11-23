import { axios_post } from './api/api';
import './styles/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [admincheck, setAdminCheck] = useState(false);
  const navigate = useNavigate();
  const typingId = (event) => {
    setUserId(event.target.value);
  };
  const typingPw = (event) => {
    setUserPw(event.target.value);
  };
  const changeState = () => {
    setAdminCheck((check) => !check);
  };
  const submit = async () => {
    // reponse 201 시 로그인 구현
    if (admincheck) {
      //관리자 로그인
    } else {
      const response = await axios_post('login', {
        studentId: Number(userId),
        password: userPw,
      });
      console.log(response);
      if (response.status === 201) {
        navigate('/lecture');
      } else {
        alert('잘못된 정보입니다.');
      }
    }
  };
  return (
    <div className="Login">
      <h1>CnS 수강신청</h1>
      <input
        type="text"
        value={userId}
        onChange={(event) => typingId(event)}
      ></input>
      <br />
      <input
        type="password"
        value={userPw}
        onChange={(event) => typingPw(event)}
      ></input>
      <br />
      <input type="checkbox" value={admincheck} onClick={changeState} />
      <label>관리자</label>
      <br />
      <button onClick={submit}>로그인</button>
    </div>
  );
}

export default Login;
