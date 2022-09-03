import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const LoginPage = React.lazy(() => import("./pages/Login"));
const SignUpPage = React.lazy(() => import("./pages/SignUp"));
const NotFoundPage = React.lazy(() => import("./pages/NotFound"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const CategoryPage = React.lazy(() => import("./pages/Category"));

const DashboardLayout = React.lazy(() =>
  import("./module/dashboard/DashboardLayout")
);

const CategoryAddNew = React.lazy(() =>
  import("./module/category/CategoryAddNew")
);
const CategoryUpdate = React.lazy(() =>
  import("./module/category/CategoryUpdate")
);
const CategoryManage = React.lazy(() =>
  import("./module/category/CategoryManage")
);

const PostAddNew = React.lazy(() => import("./module/posts/PostAddNew"));

import { urlPath } from "./utils/urlPath";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Suspense>
          <Routes>
            <Route path={urlPath.HOME} element={<HomePage />}></Route>
            <Route path={urlPath.LOGIN} element={<LoginPage />}></Route>
            <Route path={urlPath.SIGNUP} element={<SignUpPage />}></Route>

            <Route path="*" element={<NotFoundPage />}></Route>

            <Route path={urlPath.CATEGORY_PAGE} element={<CategoryPage />} />

            <Route element={<DashboardLayout />}>
              <Route path={urlPath.DASHBOARD} element={<Dashboard />}></Route>
              <Route
                path={urlPath.CATEGORY_MANAGE}
                element={<CategoryManage />}
              />
              <Route path={urlPath.CATEGORY_ADD} element={<CategoryAddNew />} />
              <Route
                path={urlPath.CATEGORY_UPDATE}
                element={<CategoryUpdate />}
              />

              <Route path={urlPath.POST_ADD} element={<PostAddNew />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </>
  );
}

export default App;
