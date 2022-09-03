import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import slugify from "slugify";
import { toast } from "react-toastify";

import { useAuth } from "../../context/AuthContext";

import DashboardMainHeading from "../dashboard/DashboardMainHeading";

import { Field, Group } from "../../components/field";
import Input from "../../components/input/Input";
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

const CategoryUpdate = () => {
  const { user } = useAuth();
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  const navigate = useNavigate();
  const [category, setCategory] = useState(undefined);

  const {
    control,
    setValue,
    reset,
    watch,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    defaultValues: {},
  });

  const watchStatus = watch("status");

  // Get category by id
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${categoriesRoute}/${categoryId}`);
      setCategory(res.data);
      setValue("name", res.data.name);
      setValue("slug", res.data.slug);
      setValue("status", res.data.status);
    }

    fetchData();
  }, [categoryId, reset]);

  const handleUpdateCategory = async (values) => {
    if (!isValid) return;

    if (!checkUserIsAdmin(user)) return;

    const newValues = { ...values };

    newValues.slug = slugify(newValues.slug || newValues.name, {
      lower: true,
    });
    newValues.status = Number(newValues.status);

    try {
      await axios.put(`${categoriesRoute}/${categoryId}`, newValues);
      toast.success("Chỉnh sửa danh mục thành công!");
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
      <DashboardMainHeading title="Chỉnh sửa danh mục" />
      {category && (
        <>
          <form
            onSubmit={handleSubmit(handleUpdateCategory)}
            autoComplete="off"
          >
            <div className="form-layout">
              <Field>
                <Label htmlFor="name">{labelName.CATEGORY}</Label>
                <Input
                  control={control}
                  name="name"
                  placeholder={placeholder(labelName.CATEGORY)}
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
                      checked={
                        Number(watchStatus) === categoryStatus.UNAPPROVED
                      }
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
              Chỉnh sửa danh mục
            </Button>
          </form>
        </>
      )}
    </>
  );
};

export default CategoryUpdate;
