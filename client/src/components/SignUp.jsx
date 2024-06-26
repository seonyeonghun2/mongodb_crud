import React, { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [passwd, setPasswd] = useState("");
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };
  const handleChangePasswd = (e) => {
    setPasswd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("회원가입을 시도했습니다.");
    axios({
      method: "POST",
      url: "http://localhost:4000/signup",
      data: {
        name: name,
        email: mail,
        password: passwd,
      },
      headers: "application/json; charset=utf-8",
    })
      .then((response) => {
        if (response.status == 200 || response.statusText == "OK") {
          let choice = confirm("홈 화면으로 이동하시겠습니까?");
          choice ? (location.href = "/") : null;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h2>Sign Up - 회원 가입</h2>
      <div>
        <label htmlFor="uname">이름</label>
        <input
          type="text"
          name="uname"
          id="uname"
          required
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <div>
        <label htmlFor="umail">이메일</label>
        <input
          type="email"
          name="umail"
          id="umail"
          required
          value={mail}
          onChange={handleChangeMail}
        />
      </div>
      <div>
        <label htmlFor="upasswd">비밀번호</label>
        <input
          type="password"
          name="upasswd"
          id="upasswd"
          required
          value={passwd}
          onChange={handleChangePasswd}
        />
      </div>
      <button type="submit">회원가입</button>
      <button type="reset">취소</button>
    </form>
  );
};

export default SignUp;
