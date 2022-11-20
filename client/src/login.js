import { axios_post } from "./api/api";
import "./styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const navigate = useNavigate();
  const typingId = (event) => {
    setUserId(event.target.value);
  };
  const typingPw = (event) => {
    setUserPw(event.target.value);
  };
  const submit = async () => {
    // let response = await axios_post("login", {
    //   id: userId,
    //   password: userPw,
    // });
    // console.log(response);
    navigate("/");
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
      <button onClick={submit}>로그인</button>
    </div>
  );
}

export default Login;
