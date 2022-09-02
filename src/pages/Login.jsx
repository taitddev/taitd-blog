import React, { useEffect } from "react";
import axios from "axios";

import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

import { useAuth } from "../context/AuthContext";

import { errorMessages } from "../utils/messages";
import { labelName, placeholder } from "../utils/properties";
import { loginRoute } from "../utils/apiRoute";

import Authentication from "./Authentication";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input, InputPasswordToggle } from "../components/input/Index";
import { Button } from "../components/button";
import { documentTitle } from "../utils/constants";

const schema = yup.object({
  email: yup
    .string()
    .email(errorMessages.EMAIL_FORMAT)
    .required(errorMessages.EMAIL_REQUIRED),
  password: yup.string().required(errorMessages.PASSWORD_REQUIRED),
});

const Login = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const handleLogin = async (values) => {
    if (!isValid) return;

    try {
      const res = await axios.post(loginRoute, values);
      setUser(res.data);
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      const status = error.response.status;
      if (status === 404) {
        toast.error("Email bạn nhập không kết nối với tài khoản nào");
      } else if (status === 400) {
        toast.error("Mật khẩu bạn nhập không đúng");
      }
    }
  };

  // Show toast if errors happen
  useEffect(() => {
    const arrErrors = Object.values(errors);

    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  // Set document title and redirect to home page if user is logged in
  useEffect(() => {
    document.title = documentTitle.LOGIN;
    if (user) navigate("/");
  }, [user]);

  return (
    <Authentication>
      <form
        className="form"
        onSubmit={handleSubmit(handleLogin)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="email">{labelName.EMAIL}</Label>
          <Input
            name="email"
            type="email"
            control={control}
            placeholder={placeholder(labelName.EMAIL)}
          ></Input>
        </Field>

        <Field>
          <Label htmlFor="password">{labelName.PASSWORD}</Label>
          <InputPasswordToggle name="password" control={control} />
        </Field>

        <div className="have-account">
          Bạn chưa có tài khoản? <NavLink to={"/signup"}>Đăng ký</NavLink>
        </div>

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          maxWidth="200px"
        >
          Đăng nhập
        </Button>
      </form>
    </Authentication>
  );
};

export default Login;
