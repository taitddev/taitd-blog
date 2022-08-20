import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

const SignUpPage = React.lazy(() => import("./pages/SignUp"));
const LoginPage = React.lazy(() => import("./pages/Login"));

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Suspense>
          <Routes>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
          </Routes>
        </Suspense>
      </AuthContextProvider>
    </div>
  );
}

export default App;
