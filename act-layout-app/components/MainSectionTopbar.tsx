import React, { useState } from "react";
//icons
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainSectionTopbar() {
  const [flagged, setFlagged] = useState(false);
  return (
    <div className="flex gap-[2px] mx-[10px] py-[6px] items-center justify-between">
      <span className="text-sm font-normal text-[#6c757d]">Help Screen</span>
      <button
        type="button"
        className={`py-[.75rem] px-[.7rem] flex items-center gap-x-2 text-xs font-bold rounded-[3px] bg-transparent ${
          flagged
            ? `text-[#a12310] hover:bg-[#a12310] focus:bg-[#a12310]`
            : `text-gray-500 hover:bg-gray-500 focus:bg-gray-500`
        } border-none  hover:text-white focus:outline-none  focus:text-white`}
        onClick={() => setFlagged(!flagged)}
      >
        <FontAwesomeIcon size={"lg"} icon={faBookmark} />
        FLAG
      </button>
    </div>
  );
}

export default MainSectionTopbar;
