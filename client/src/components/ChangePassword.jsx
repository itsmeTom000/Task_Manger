import { Dialog } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "./Button";
import Loading from "./Loader";
import ModalWrapper from "./ModalWrapper";
import { useChangePasswordMutation } from "../redux/slices/Api/userApislice";
import Textbox from "./Textbox";

const ChangePassword = ({ open, setOpen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [changeUserPassword, { isLoading }] = useChangePasswordMutation();
  const handleOnSubmit = async (data) => {
    if (data.password !== data.cpass) {
      console.log("Password doesn't match");
      return;
    }
    try {
      const res = await changeUserPassword(data).unwrap();
      setTimeout(() => {
        setOpen(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Dialog.Title
            as="h3"
            className="text-base font-bold leading-6 text-gray-900 mb-4"
          >
            Change Password
          </Dialog.Title>

          <div className="mt-2">
            <Textbox
              placeholder="New Password"
              type="password"
              name="password"
              label="Password"
              className="w-full rounded"
              register={register("password", {
                required: "Password is required",
              })}
              error={errors.password ? errors.password.message : ""}
            />
            <Textbox
              placeholder="Confirm new Password"
              type="password"
              name="cpass"
              label="Confirm new Password"
              className="w-full rounded"
              register={register("cpass", {
                required: "Password is required",
              })}
              error={errors.password ? errors.password.message : ""}
            />
          </div>
          {isLoading ? (
            <div className="py-5">
              <Loading />
            </div>
          ) : (
            <div className="py-3 mt-4 sm:flex sm:flex-row-reverse">
              <Button
                type="submit"
                className="bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700"
                label="save"
              />
              <button
                type="button"
                className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </form>
      </ModalWrapper>
    </>
  );
};
export default ChangePassword;
