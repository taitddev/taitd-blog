import React, { useEffect, useState } from "react";
// import { debounce } from "lodash";
// import { useNavigate } from "react-router-dom";
// import { BsEye, BsPencil, BsTrash } from "react-icons/bs";
// import Swal from "sweetalert2";

// import { useAuth } from "../../context/AuthContext";

// import { categoryStatus, CATEGORY_PER_PAGE } from "../../utils/constants";
// import { checkUserIsAdmin } from "../../utils/utils";

// import Button from "../../components/button/Button";
// import DashboardMainHeading from "../dashboard/DashboardMainHeading";
// import Table from "../../components/table/Table";
// import LabelStatus from "../../components/label/LabelStatus";
// import { Action } from "../../components/action";

const CategoryManage = () => {
  // const [filter, setFilter] = useState("");
  // const [categories, setCategories] = useState([]);
  // const [total, setTotal] = useState(0);

  // const [lastDoc, setLastDoc] = useState();

  // const { user } = useAuth();
  // const navigate = useNavigate();

  // const handleInputFilter = debounce((e) => {
  //   setFilter(e.target.value);
  // }, 1000);

  // TODO:
  const handleLoadMoreCategory = () => {};

  const handleDeleteCategory = async (docId) => {
    // if (!checkUserIsAdmin(user)) return;
    // Swal.fire({
    //   title: "Bạn chắc chắn muốn xóa danh mục này?",
    //   text: "Bạn sẽ không thể khôi phục được sau khi xóa.",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Xoá",
    // }).then(async (result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({ title: "Đã xoá danh mục", icon: "success" });
    //   }
    // });
  };

  // Fetch all categories
  // useEffect(() => {
  //   async function fetchData() {
  //     const colRef = collection(db, "categories");
  //     const newRef = filter
  //       ? query(
  //           colRef,
  //           where("name", ">=", filter),
  //           where("name", "<=", filter + "utf8")
  //         )
  //       : query(colRef, limit(CATEGORY_PER_PAGE));
  //     const documentSnapshots = await getDocs(newRef);
  //     const lastVisible =
  //       documentSnapshots.docs[documentSnapshots.docs.length - 1];

  //     onSnapshot(colRef, (snapshot) => {
  //       setTotal(snapshot.size);
  //     });

  //     onSnapshot(newRef, (snapshot) => {
  //       let results = [];
  //       snapshot.forEach((doc) => {
  //         results.push({
  //           id: doc.id,
  //           ...doc.data(),
  //         });
  //       });
  //       setCategories(results);
  //     });
  //     setLastDoc(lastVisible);
  //   }
  //   fetchData();
  // }, [filter]);

  return (
    <>
      <DashboardMainHeading title="Danh mục"></DashboardMainHeading>
      {/* <div className="flex gap-10 items-center mb-10">
        <input
          type="text"
          placeholder="Tìm kiếm danh mục..."
          className="px-5 py-4 border border-gray-300 rounded-lg"
          onChange={handleInputFilter}
        />

        <Button kind="ghost" height="60px" to="/manage/add-category">
          Tạo danh mục
        </Button>
      </div> */}

      {/* <p className="font-semibold text-lg mb-10">
        {categories.length} danh mục được tìm thấy
      </p> */}

      {/* <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên</th>
            <th>Slug</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>

        <tbody>
          {categories.length > 0 &&
            categories.map((category) => (
              <tr key={category.id}>
                <td>{category.id}</td>
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
                      <BsEye fontSize={20} />
                    </Action>

                    <Action
                      onClick={() =>
                        navigate(`/manage/update-category?id=${category.id}`)
                      }
                    >
                      <BsPencil fontSize={18} />
                    </Action>

                    <Action onClick={() => handleDeleteCategory(category.id)}>
                      <BsTrash fontSize={18} />
                    </Action>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table> */}

      {/* TODO: */}
      {/* {total > categories.length && (
        <div className="mt-10">
          <Button onClick={handleLoadMoreCategory} className="mx-auto">
            Load more
          </Button>
          {total}
        </div>
      )} */}
    </>
  );
};

export default CategoryManage;
