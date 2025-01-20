import React from "react";
//icons
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainSectionBottombar() {
  return (
    <div className="flex gap-1 mx-[10px] px-[10px] py-[8px] justify-end">
      <button
        type="button"
        className="py-[.5rem] px-[1rem] flex items-center justify-around gap-x-2 text-sm font-bold rounded-[4px] bg-transparent text-gray-500 border-none hover:bg-gray-500 hover:text-white "
      >
        <FontAwesomeIcon icon={faChevronLeft} />
        PREV
      </button>
      <button
        type="button"
        className="py-[.5rem] px-[1rem] flex items-center justify-around gap-x-2 text-sm font-bold rounded-[4px] bg-transparent text-gray-500 border-none hover:bg-gray-500 hover:text-white "
      >
        NEXT
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default MainSectionBottombar;
