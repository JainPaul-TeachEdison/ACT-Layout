import React, { useState } from "react";
import Dropdown from "./Dropdown";
//icons
import {
  faDesktop,
  faEye,
  faEyeSlash,
  faScrewdriverWrench,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ActNavbar() {
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  const [showTimer, setShowTimer] = useState(true);

  const handleDropdownToggle = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };
  return (
    <nav className="flex gap-[2px] bg-[#1b3144] px-[10px] py-[8px] items-center justify-between">
      <img
        className="w-[154px] h-[45px] max-h-[40px] inline-flex items-center gap-x-2"
        src="data:image/png;base64,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"
      />

      <div className="flex gap-1 items-center justify-between">
        <Dropdown
          id="tools"
          text={"TOOLS"}
          icon={faScrewdriverWrench}
          openDropdownId={openDropdownId}
          onToggle={handleDropdownToggle}
        />
        <Dropdown
          id="contrast"
          text={"CONTRAST"}
          icon={faDesktop}
          openDropdownId={openDropdownId}
          onToggle={handleDropdownToggle}
        />
      </div>

      <div className="gap-3 flex items-center justify-between text-white text-sm">
        <span className="text-[#adb5bd]">ANSWERED</span>
        <span>0 of 3</span>
        <span className="text-[#adb5bd]">TOTAL TIME LEFT</span>
        {showTimer ? <span>00:45:00</span> : <span>-- : -- : --</span>}
        <button
          type="button"
          className="py-[.3rem] px-[.2rem] flex items-center gap-x-2 text-xs font-bold rounded-[3px] bg-transparent text-white border-none hover:bg-[#adb5bd] hover:text-[#1b3144] focus:outline-none focus:bg-[#adb5bd] focus:text-[#1b3144]"
          onClick={() => setShowTimer(!showTimer)}
        >
          {showTimer ? (
            <FontAwesomeIcon size={"xl"} icon={faEyeSlash} />
          ) : (
            <FontAwesomeIcon size={"xl"} icon={faEye} />
          )}
        </button>

        <button
          type="button"
          className="py-[.25rem] px-[.3rem] flex items-center justify-between gap-x-2 text-xs font-bold rounded-[3px] bg-transparent text-white border-none hover:bg-white hover:text-[#a12310] focus:outline-none focus:bg-white focus:text-[#a12310]"
        >
          <FontAwesomeIcon size={"xl"} icon={faStop} />
          <span>END TEST</span>
        </button>
      </div>
    </nav>
  );
}

export default ActNavbar;
