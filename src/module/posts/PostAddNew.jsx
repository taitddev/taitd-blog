import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import slugify from "slugify";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

import DashboardMainHeading from "../dashboard/DashboardMainHeading";

import { Field, Group } from "../../components/field";
import Input from "../../components/input/Input";
import ImageUpload from "../../components/input/ImageUpload";
import { Label } from "../../components/label";
import Radio from "../../components/radio/Radio";

import { categoriesRoute } from "../../utils/apiRoute";
import { labelName, placeholder } from "../../utils/properties";
import { Button } from "../../components/button";
import { errorMessages } from "../../utils/messages";
import { categoryStatus } from "../../utils/constants";

import { checkUserIsAdmin } from "../../utils/commonFunction";

const schema = yup.object({
  name: yup.string().required(errorMessages.CATEGORY_REQUIRED),
});

const PostAddNew = () => {
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      slug: "",
      status: 1,
      createdAt: new Date(),
    },
  });
  const watchStatus = watch("status");

  const handleAddNewCategory = async (values) => {
    if (!isValid) return;

    if (!checkUserIsAdmin(user)) return;

    const newValues = { ...values };

    newValues.slug = slugify(newValues.slug || newValues.name, {
      lower: true,
    });
    newValues.status = Number(newValues.status);

    try {
      await axios.post(categoriesRoute, newValues);
      toast.success("Tạo mới danh mục thành công!");
    } catch (error) {
      toast.error(error.message);
    } finally {
      reset({
        name: "",
        slug: "",
        status: 1,
        createdAt: new Date(),
      });
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
    <>
      <DashboardMainHeading title="Tạo bài viết" />
      <form onSubmit={handleSubmit(handleAddNewCategory)} autoComplete="off">
        <div className="form-layout">
          <Field>
            <Label htmlFor="name">{labelName.TITLE}</Label>
            <Input
              control={control}
              name="name"
              placeholder={placeholder(labelName.TITLE)}
            ></Input>
          </Field>

          <Field>
            <Label htmlFor="slug">{labelName.SLUG}</Label>
            <Input
              control={control}
              name="slug"
              placeholder={placeholder(labelName.SLUG)}
            ></Input>
          </Field>
        </div>

        <div className="form-layout">
          <Field>
            <Label htmlFor="name">{labelName.IMAGE_UPLOAD}</Label>
            <ImageUpload></ImageUpload>
          </Field>

          <Field>
            <Label htmlFor="slug">{labelName.SLUG}</Label>
            <Input
              control={control}
              name="slug"
              placeholder={placeholder(labelName.SLUG)}
            ></Input>
          </Field>
        </div>

        <div className="form-layout">
          <Field>
            <Label>Trạng thái</Label>
            <div className="flex flex-wrap gap-x-5">
              <Group>
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === categoryStatus.APPROVED}
                  value={categoryStatus.APPROVED}
                >
                  Đã phê duyệt
                </Radio>
                <Radio
                  name="status"
                  control={control}
                  checked={Number(watchStatus) === categoryStatus.UNAPPROVED}
                  value={categoryStatus.UNAPPROVED}
                >
                  Chưa phê duyệt
                </Radio>
              </Group>
            </div>
          </Field>
        </div>

        <Button
          type="submit"
          loading={isSubmitting}
          disabled={isSubmitting}
          className="min-w-[200px]"
        >
          Thêm danh mục
        </Button>
      </form>
    </>
  );
};

export default PostAddNew;
