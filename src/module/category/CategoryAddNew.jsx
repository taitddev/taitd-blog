import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import slugify from "slugify";

import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import DashboardMainHeading from "../dashboard/DashboardMainHeading";
import Field from "../../components/field/Field";
import Group from "../../components/field/Group";
import Label from "../../components/label/Label";
import Input from "../../components/input/Input";
import Radio from "../../components/radio/Radio";
import Button from "../../components/button/Button";

import { categoryStatus, documentTitle } from "../../utils/constants";
import { checkUserIsAdmin } from "../../utils/utils";

const schema = yup.object({
  name: yup.string().required("Hãy nhập tên chuyên mục"),
  slug: yup.string().required("Hãy nhập slug"),
});

const CategoryAddNew = () => {
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

  const { user } = useAuth();

  const handleAddNewCategory = async (values) => {};

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

  useEffect(() => {
    document.title = documentTitle.ADD_CATEGORY;
  }, []);

  return (
    <>
      <DashboardMainHeading title="Danh mục mới"></DashboardMainHeading>

      <form onSubmit={handleSubmit(handleAddNewCategory)} autoComplete="off">
        <div className="form-layout">
          <Field>
            <Label htmlFor="name">Tên danh mục</Label>
            <Input
              control={control}
              name="name"
              placeholder="Nhập tên danh mục"
            ></Input>
          </Field>

          <Field>
            <Label htmlFor="slug">Slug</Label>
            <Input
              control={control}
              name="slug"
              placeholder="Nhập slug"
            ></Input>
          </Field>
        </div>

        <div className="form-layout">
          <Field>
            <Label>Trạng thái</Label>
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
          </Field>
        </div>

        <Button
          kind="primary"
          type="submit"
          maxWidth="200px"
          disabled={isSubmitting ? 1 : 0}
          loading={isSubmitting ? 1 : 0}
        >
          Tạo danh mục
        </Button>
      </form>
    </>
  );
};

export default CategoryAddNew;
