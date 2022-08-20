import React, { useContext, useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import slugify from "slugify";
import { toast } from "react-toastify";
import axios from "axios";

import { useAuth } from "../contexts/AuthContext";

import { labelName, placeholder, errorMessage } from "../utils/constants";

import Authentication from "./Authentication";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input, InputPasswordToggle } from "../components/input";
import { Button } from "../components/button";

const schema = yup.object({
  email: yup
    .string()
    .email(errorMessage.EMAIL_FORMAT)
    .required(errorMessage.EMAIL_REQUIRED),
  password: yup.string().required(errorMessage.PASSWORD_REQUIRED),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const handleLogin = async (values) => {
    if (!isValid) return;

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}auth/login`, values);
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
