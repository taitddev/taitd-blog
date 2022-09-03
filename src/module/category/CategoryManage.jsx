import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import axios from "axios";
import Swal from "sweetalert2";

import { HiOutlineEye, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

import { useAuth } from "../../context/AuthContext";

import { urlPath } from "../../utils/urlPath";
import { categoryStatus } from "../../utils/constants";
import { categoriesRoute } from "../../utils/apiRoute";

import DashboardMainHeading from "../dashboard/DashboardMainHeading";
import Table from "../../components/table/Table";
import { Button } from "../../components/button";
import { LabelStatus } from "../../components/label";
import Action from "../../components/action/Action";
import { checkUserIsAdmin } from "../../utils/commonFunction";

const CategoryManage = () => {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState([]);

  const navigate = useNavigate();

  const handleInputFilter = debounce((e) => {
    setFilter(e.target.value);
  }, 500);

  // Fetch all categories
  useEffect(() => {
    async function fetchCategories() {
      const res = await axios.get(`${categoriesRoute}/?search=${filter}`);
      setCategories(res.data);
    }
    fetchCategories();
  }, [filter, status]);

  const handleDeleteCategory = (categoryId) => {
    if (!checkUserIsAdmin(user)) return;

    Swal.fire({
      title: "Bạn chắc chắn muốn xóa danh mục này?",
      text: "Bạn không thể hoàn tác khi đã xóa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ok",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.delete(`${categoriesRoute}/${categoryId}`);
        Swal.fire("Đã xóa danh mục!", "", "success");
        setStatus([...status, `Deleted ${categoryId}`]);
      }
    });
  };

  return (
    <>
      <DashboardMainHeading title="Danh mục"></DashboardMainHeading>
      <div className="flex gap-5 mb-10">
        <input
          type="text"
          placeholder="Tìm kiếm danh mục..."
          className="px-5 py-4 border border-gray-300 rounded-lg outline-none"
          onChange={handleInputFilter}
        />
        <Button kind="ghost" height="60px" to={urlPath.CATEGORY_ADD}>
          Tạo danh mục
        </Button>
      </div>

      <p className="mb-10">{categories.length} danh mục được tìm thấy</p>

      <Table>
        <thead>
          <tr>
            <th>Tên danh mục</th>
            <th>Slug</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody className="">
          {categories.length > 0 &&
            categories.map((category) => (
              <tr key={category._id} className="">
                <td>{category.name}</td>
                <td>
                  <span className="italic text-gray-400">{category.slug}</span>
                </td>
                <td>
                  {Number(category.status) === categoryStatus.APPROVED && (
                    <LabelStatus type="success">Đã phê duyệt</LabelStatus>
                  )}
                  {Number(category.status) === categoryStatus.UNAPPROVED && (
                    <LabelStatus type="warning">Chưa phê duyệt</LabelStatus>
                  )}
                </td>
                <td>
                  <div className="flex items-center text-gray-500 gap-x-3">
                    <Action
                      onClick={() => navigate(`/category/${category.slug}`)}
                    >
                      <HiOutlineEye fontSize={22} />
                    </Action>

                    <Action
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category._id}`)
                      }
                    >
                      <HiOutlinePencil fontSize={22} />
                    </Action>

                    <Action onClick={() => handleDeleteCategory(category._id)}>
                      <HiOutlineTrash fontSize={22} />
                    </Action>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default CategoryManage;
