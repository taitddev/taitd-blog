import Swal from "sweetalert2";
import { userRole } from "./constants";

export const checkUserIsAdmin = (user) => {
  if (user?.role === userRole.ADMIN) {
    return true;
  }
  console.log("User is not admin");
  Swal.fire(
    "Thất bại",
    "Bạn không có quyền thực hiện hành động này",
    "warning"
  );
  return false;
};
