import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// fortawesome 설치
// yarn add @fortawesome/fontawesome-svg-core
// yarn add @fortawesome/react-fontawesome
// yarn add @fortawesome/free-solid-svg-icons
// yarn add @fortawesome/free-regular-svg-icons
const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "메인",
    "나의 책"
  ];
  let [width, setWidth] = useState(0);
  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    // 입력한 검색어(event.target.value)를 읽어와서 url(navigate)을 바꿔준다
    if (event.key === "Enter") {
      navigate(`?q=${event.target.value}`);
    }
  };
  return (
    <div>
      <div className="side-menu" style={{ width: width }}>
        <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button>
        <div className="side-menu-list" id="menu-list">
          {menuList.map((menu, index) => (
            <button key={index}>{menu}</button>
          ))}
        </div>
      </div>
      <div className="nav-header">
        <div className="burger-menu hide">
          <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
        </div>
        {authenticate ? (
          <div onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그아웃</span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer" }}>로그인</span>
          </div>
        )}
      </div>

      <div className="nav-logo">
        <Link to="/" className="">코딩알려주는 누나 도서관</Link>
      </div>
      <div className="nav-menu-area">
        <ul className="menu">
          {menuList.map((menu, index) => (
            <li key={index}>
              <a href="#" >
                {menu}
              </a>
            </li>
          ))}
        </ul>

        <div className="search-box">
          <FontAwesomeIcon icon={faSearch} />
          {/* onKeyPress => onKeyDown React에서 권장함
            키를 입력하면 호출되는 이벤트
          */}
          <input type="text" placeholder="제품검색" onKeyDown={onCheckEnter} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;