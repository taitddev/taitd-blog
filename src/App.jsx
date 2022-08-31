import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const SignUpPage = React.lazy(() => import("./pages/SignUp"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));

const DashboardLayout = React.lazy(() =>
  import("./module/dashboard/DashboardLayout")
);
const CategoryManage = React.lazy(() => {
  import("./module/category/CategoryManage");
});

const CategoryAddNew = React.lazy(() => {
  import("./module/category/CategoryAddNew");
});

import { path } from "./utils/constants";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Suspense>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>

            <Route element={<DashboardLayout />}>
              <Route path={path.DASHBOARD} element={<Dashboard />}></Route>

              <Route
                path={path.CATEGORY_MANAGE}
                element={<CategoryManage />}
              ></Route>

              {/* <Route
                path={path.ADD_CATEGORY}
                element={<CategoryAddNew />}
              ></Route> */}
            </Route>
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </div>
  );
}

export default App;
