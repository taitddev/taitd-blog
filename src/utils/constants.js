export const theme = {
  primary: "#2ebac1",
  secondary: "#a4d96c",
  charlestonGreen: "#292d32",
  antiFlashWhite: "#F1F1F3",
  brightGray: "#E7ECF3",
  tiffanyBlue: "#00B4AA",
  pixiePowder: "#3A1097",
  vividSkyBlue: "#00D1ED",
};

export const labelName = {
  FULLNAME: "Họ tên",
  USERNAME: "Tên đăng nhập",
  EMAIL: "Email",
  PASSWORD: "Mật khẩu",
  PASSWORD_CONFIRM: "Xác nhận mật khẩu",
};

export const placeholder = (text) => {
  return `Nhập ${text.toLowerCase()}`;
};

export const buttonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  GHOST: "ghost",
};

export const categoryStatus = {
  APPROVED: 1,
  UNAPPROVED: 2,
};

export const postStatus = {
  APPROVED: 1,
  PENDING: 2,
  REJECTED: 3,
};

export const userStatus = {
  ACTIVE: 1,
  PENDING: 2,
  BAN: 3,
};

export const userRole = {
  ADMIN: 1,
  MOD: 2,
  USER: 3,
};

export const path = {
  LOGIN: "/login",
  SIGNUP: "/signup",
  DASHBOARD: "/dashboard",
  CATEGORY_MANAGE: "/manage/category",
  ADD_CATEGORY: "/manage/add-category",
};

export const errorMessage = {
  FULLNAME_REQUIRED: "Hãy nhập họ tên",
  EMAIL_REQUIRED: "Hãy nhập email",
  EMAIL_FORMAT: "Hãy nhập đúng định dạng email",
  PASSWORD_REQUIRED: "Hãy nhập mật khẩu",
  PASSWORD_MIN_LENGTH: "Mật khẩu phải có ít nhất 8 ký tự",
  PASSWORD_FORMAT:
    "Mật khẩu phải có ít nhất 1 ký tự viết hoa, 1 ký tự viết thường, 1 số và 1 ký tự đặc biệt",
};

export const documentTitle = {
  ADD_POST: "Monkey Blog - Thêm bài viết mới",
  ADD_CATEGORY: "Monkey Blog - Thêm danh mục",
  LOGIN: "Monkey Blog - Đăng nhập",
  SIGN_UP: "Monkey Blog - Đăng ký tài khoản",
};

export const PASSWORD_MIN_LENGTH = 8;
export const POST_PER_PAGE = 10;
export const CATEGORY_PER_PAGE = 10;
