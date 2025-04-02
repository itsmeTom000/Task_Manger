import { Popover, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { getInitials } from "../utils";

const UserInfo = ({ user }) => {
  return (
    <div className="px-4">
      <Popover className="relative">
        <>
          {/* Popover Button */}
          <Popover.Button className="group inline-flex items-center outline-none">
            <span className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white rounded-full text-sm font-semibold">
              {getInitials(user?.name || "N/A")}
            </span>
          </Popover.Button>

          {/* Popover Panel */}
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-80 max-w-sm -translate-x-1/2 transform px-4 sm:px-0">
              <div className="flex items-center gap-4 bg-white rounded-lg shadow-lg p-6">
                {/* User Avatar */}
                <div className="w-14 h-14 bg-blue-600 rounded-full text-white flex items-center justify-center text-lg font-bold">
                  {getInitials(user?.name || "N/A")}
                </div>

                {/* User Details */}
                <div className="flex flex-col">
                  <p className="text-black text-lg font-semibold">
                    {user?.name || "Unknown User"}
                  </p>
                  <span className="text-sm text-gray-500">
                    {user?.title || "No Title"}
                  </span>
                  <a
                    href={`mailto:${user?.email}`}
                    className="text-blue-500 text-sm"
                  >
                    {user?.email ?? "email@example.com"}
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      </Popover>
    </div>
  );
};

export default UserInfo;
