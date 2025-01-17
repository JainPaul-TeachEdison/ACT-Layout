import React, { useState } from "react";
//font-awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  id: string;
  text: string;
  icon: IconProp;
  openDropdownId: string | null;
  onToggle: (id: string) => void;
}

function Dropdown(props: IProps) {
  const { id, text, icon, openDropdownId, onToggle } = props;
  const isOpen = openDropdownId === id;
  return (
    <div className="relative">
      <button
        id={`dropdown-button-${id}`}
        type="button"
        className="py-[.375rem] px-[.75rem] flex items-start gap-x-2 text-sm font-bold rounded-md bg-transparent text-white border-none hover:bg-white hover:text-[#1b3144] focus:outline-none focus:bg-white focus:text-[#1b3144]"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Dropdown"
        onClick={() => onToggle(id)}
      >
        <FontAwesomeIcon size={"lg"} icon={icon} />
        <span>{text}</span>
        <FontAwesomeIcon icon={faSortDown} />
      </button>

      {isOpen && (
        <div
          className="absolute z-10 min-w-60 bg-white shadow-md rounded-lg mt-2"
          role="menu"
        >
          <div className="p-1 space-y-0.5">
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Newsletter
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Purchases
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Downloads
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Team Account
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
