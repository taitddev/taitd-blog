import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import axios from "axios";

import { useAuth } from "../context/AuthContext";

import {
  labelName,
  placeholder,
  errorMessage,
  PASSWORD_MIN_LENGTH,
} from "../utils/constants";

import Authentication from "./Authentication";
import { Field } from "../components/field";
import { Label } from "../components/label";
import { Input, InputPasswordToggle } from "../components/input/Index";
import { Button } from "../components/button";

const schema = yup.object({
  fullname: yup.string().required(errorMessage.FULLNAME_REQUIRED),
  email: yup
    .string()
    .email(errorMessage.EMAIL_FORMAT)
    .required(errorMessage.EMAIL_REQUIRED),
  password: yup
    .string()
    .required(errorMessage.PASSWORD_REQUIRED)
    .min(PASSWORD_MIN_LENGTH, errorMessage.PASSWORD_MIN_LENGTH)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      errorMessage.PASSWORD_FORMAT
    ),
});

const SignUp = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({ mode: "onChange", resolver: yupResolver(schema) });

  const handleSignUp = async (values) => {
    if (!isValid) return;

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}auth/register`, values);
    } catch (error) {
      console.log(error.message);
    }

    toast.success("Đăng ký tài khoản thành công!");
    navigate("/login");
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
        onSubmit={handleSubmit(handleSignUp)}
        autoComplete="off"
      >
        <Field>
          <Label htmlFor="fullname">{labelName.FULLNAME}</Label>
          <Input
            name="fullname"
            type="text"
            control={control}
            placeholder={placeholder(labelName.FULLNAME)}
          ></Input>
        </Field>

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
          Bạn đã có tài khoản? <NavLink to={"/login"}>Đăng nhập</NavLink>
        </div>

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          maxWidth="200px"
        >
          Đăng ký
        </Button>
      </form>
    </Authentication>
  );
};

export default SignUp;
