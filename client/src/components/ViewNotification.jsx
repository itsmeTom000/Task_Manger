import React from "react";
import ModalWrapper from "./ModalWrapper";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

const ViewNotification = ({ open, setOpen, el }) => {
  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <div className="py-4 w-full flex flex-col gap-4 item-center justify-center">
          <Dialog.Title as="h3" className="font-semibold text-lg">
            {el?.task?.title}
          </Dialog.Title>
          <p className="text-start text-grey-500">{el?.text}</p>
          <Button
            type="button"
            label="ok"
            className="bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto"
            onClick={() => setOpen(false)}
          />
        </div>
      </ModalWrapper>
    </>
  );
};

export default ViewNotification;
