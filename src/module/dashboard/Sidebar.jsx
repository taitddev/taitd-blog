import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { HiOutlineBookOpen } from "react-icons/hi";
import { BiCategoryAlt, BiLogOut, BiUser } from "react-icons/bi";

const SidebarStyles = styled.div`
  width: 300px;
  background: #ffffff;
  box-shadow: 10px 10px 20px rgba(218, 213, 213, 0.15);
  border-radius: 12px;
  .menu-item {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 14px 20px;
    font-weight: 500;
    color: ${(props) => props.theme.gray80};
    margin-bottom: 20px;
    cursor: pointer;
    &.active,
    &:hover {
      background: #f1fbf7;
      color: ${(props) => props.theme.primary};
    }
  }
  @media screen and (max-width: 1023.98px) {
    display: none;
  }
`;

const sidebarLinks = [
  {
    title: "Bảng điều khiển",
    url: "/dashboard",
    icon: <MdOutlineSpaceDashboard fontSize={22} />,
  },
  {
    title: "Bài viết",
    url: "/manage/posts",
    icon: <HiOutlineBookOpen fontSize={22} />,
  },
  {
    title: "Danh mục",
    url: "/manage/category",
    icon: <BiCategoryAlt fontSize={22} />,
  },
  {
    title: "Tài khoản",
    url: "/manage/user",
    icon: <BiUser fontSize={22} />,
  },
  {
    title: "Đăng xuất",
    url: "/",
    icon: <BiLogOut fontSize={22} />,
    onClick: () => signOut(auth),
  },
];

const Sidebar = () => {
  return (
    <SidebarStyles>
      {sidebarLinks.map((link) => {
        if (link.onClick)
          return (
            <div className="menu-item" onClick={link.onClick} key={link.title}>
              <span className="menu-icon">{link.icon}</span>
              <span className="menu-text">{link.title}</span>
            </div>
          );
        return (
          <NavLink to={link.url} className="menu-item" key={link.title}>
            <span className="menu-icon">{link.icon}</span>
            <span className="menu-text">{link.title}</span>
          </NavLink>
        );
      })}
    </SidebarStyles>
  );
};

export default Sidebar;
