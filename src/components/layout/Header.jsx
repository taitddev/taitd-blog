import React, { useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { AiOutlineSearch } from "react-icons/ai";
import {
  IoBookmark,
  IoChatbubble,
  IoChevronDown,
  IoLogOutOutline,
  IoNotifications,
} from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import { urlPath } from "../../utils/urlPath";

import logo from "../../assets/logo.svg";
import Button from "../button/Button";

const navbarList = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const HeaderStyles = styled.header`
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    max-width: 50px;
  }

  .navbar-list {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 40px;
    font-weight: 700;
  }

  .header-right {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .search {
    position: relative;
  }

  .search-icon {
    position: absolute;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
  }

  .search-input {
    padding: 12px 40px 12px 12px;
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.antiFlashWhite};
    border-radius: 6px;
    transition: all 0.2s linear;
  }

  .icon-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .icon-wrapper {
    background-color: ${(props) => props.theme.antiFlashWhite};
    padding: 10px;
    border-radius: 8px;
    position: relative;
  }

  .badge {
    color: white;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    background-color: #b15568;
  }

  .user-wrapper {
    position: relative;
    background-color: ${(props) => props.theme.antiFlashWhite};
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    padding: 10px;
  }

  .menu-wrapper {
    position: absolute;
    width: 100%;
    top: 100%;
    transform: translateY(10px);
    right: 0;
    background-color: ${(props) => props.theme.antiFlashWhite};
    padding: 20px 16px;
    border-radius: 8px;
    visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
    transition: all 0.2s linear;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }

  .username {
    font-size: 16px;
    margin-bottom: -10px;
    font-weight: 600;
  }

  .user-email {
    font-size: 12px;
  }

  input:focus {
    background-color: #fff;
    border-color: ${(props) => props.theme.primary};
  }
`;

const Header = () => {
  const { user, setUser } = useAuth();
  console.log("🚀 ~ file: Header.jsx ~ line 174 ~ Header ~ user", user);

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    toast.success("Đăng xuất thành công");
  };

  return (
    <HeaderStyles showMenu={showMenu}>
      <div className="container">
        <div className="navbar">
          <NavLink to="/">
            <img src={logo} alt="logo" className="logo" />
          </NavLink>

          <ul className="navbar-list">
            {navbarList.map((item) => (
              <li className="navbar-item" key={item.title}>
                <NavLink to={item.url} className="navbar-link">
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="header-right">
            <div className="search">
              <input
                type="text"
                className="search-input"
                placeholder="Search posts..."
              />

              <div className="search-icon">
                <AiOutlineSearch fontSize={24} color="#2ebac1" />
              </div>
            </div>

            <div className="icon-list">
              <div className="icon-wrapper">
                <IoChatbubble fontSize={28} color="#2ebac1" />
                <span className="badge">5</span>
              </div>

              <div className="icon-wrapper">
                <IoNotifications fontSize={28} color="#2ebac1" />
                <span className="badge">10</span>
              </div>

              <div className="icon-wrapper">
                <IoBookmark fontSize={28} color="#2ebac1" />
                <span className="badge">15</span>
              </div>
            </div>

            {user ? (
              <div className="user-wrapper">
                <img src={user?.image} alt="avatar" className="avatar" />

                <div className="user-info">
                  <p className="username">{user.fullname}</p>
                  <span className="user-email">{user.email}</span>
                </div>

                <IoChevronDown
                  cursor="pointer"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                />

                <div className="menu-wrapper">
                  <ul className="menu-list">
                    <li
                      className="menu-item"
                      onClick={() => {
                        navigate("/dashboard");
                      }}
                    >
                      <MdOutlineDashboard fontSize={20} />
                      <span>Bảng điều khiển</span>
                    </li>

                    <li className="menu-item" onClick={handleLogout}>
                      <IoLogOutOutline fontSize={20} />
                      <span>Đăng xuất</span>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <Button
                type="button"
                height="56px"
                className="header-button"
                to={urlPath.LOGIN}
              >
                Login
              </Button>
            )}
          </div>
        </div>
      </div>
    </HeaderStyles>
  );
};

export default Header;
