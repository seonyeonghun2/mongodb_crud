import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header-top d-flex gap-1 flex-end border-bottom">
        <Link to="/">처음으로</Link>
        <Link to="/signin">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
      <header>
        <div className="container d-flex align-center">
          <div className="logo">로고</div>
          <nav className="main_nav flex-1">
            <ul id="gnb" className="d-flex justify-between">
              <li>home</li>
              <li>about</li>
              <li>service</li>
              <li>community</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
