import React from "react";
//components
import MainSectionBottombar from "./MainSectionBottombar";
import MainSectionTopbar from "./MainSectionTopbar";
//icons
import {
  faBookmark,
  faChevronLeft,
  faChevronRight,
  faDesktop,
  faEyeSlash,
  faKeyboard,
  faScrewdriverWrench,
  faSortDown,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainSectionBody() {
  return (
    <div className="bg-white shadow-custom max-w-[95%] max-h-[94svh] m-[10px] divide-solid divide-x-0 divide-y-2 divide-gray-200">
      <MainSectionTopbar />
      <div className=" mx-[10px] max-h-[83.7svh] overflow-y-auto">
        <div className="my-[15px] mx-[10px]">
          <span className="text-[21px] font-normal underline">Help Screen</span>
          <div className="text-sm">
            <p>
              This page contains descriptions of the tools, buttons, and
              informational fields available during the test. This information
              can be accessed at any time by selecting the "
              <strong>Help Screen</strong>" button.
            </p>
            <p>
              Select the "<strong>Next</strong>" button to proceed.
            </p>
            <p>&nbsp;</p>
          </div>

          <table className="table-auto h-[332px] w-[96.5626%] border-collapse border-double">
            <tbody className="divide-double divide-x-0 divide-y-4">
              <tr className="border border-gray-300">
                <td className="w-[25.47%] h-[10px] align-top text-left">
                  <button
                    type="button"
                    className="py-[.75rem] px-[.75rem] flex items-start gap-x-2 text-sm font-bold rounded-md bg-[#1b3144] text-white border-none"
                  >
                    <FontAwesomeIcon size={"lg"} icon={faScrewdriverWrench} />
                    <span>TOOLS</span>
                    <FontAwesomeIcon icon={faSortDown} />
                  </button>
                </td>
                <td className="text-sm width: 100.408%; height: 10px; vertical-align: top;">
                  Select the TOOLS drop-down menu to access the answer
                  eliminator, answer masking, line reader, and magnifier. Select
                  a tool to turn it on or off. Multiple tools can be selected at
                  the same time.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; height: 10px; vertical-align: top; text-align: left;">
                  <button
                    type="button"
                    className="py-[.75rem] px-[.75rem] flex items-start gap-x-2 text-sm font-bold rounded-md bg-[#1b3144] text-white border-none"
                  >
                    <FontAwesomeIcon size={"lg"} icon={faDesktop} />
                    <span>CONTRAST</span>
                    <FontAwesomeIcon icon={faSortDown} />
                  </button>
                </td>
                <td className="text-sm width: 100.408%; height: 10px; vertical-align: top;">
                  Select the CONTRAST drop-down menu to adjust the screen
                  contrast.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; height: 18px; vertical-align: top; text-align: left;">
                  <button
                    type="button"
                    className="py-[.75rem] px-[.75rem] flex items-start gap-x-2 text-sm font-bold rounded-md bg-[#1b3144] text-white border-none"
                  >
                    <FontAwesomeIcon size={"lg"} icon={faKeyboard} />
                    <span>ANSWERED</span>
                    <span>1 OF 10</span>
                  </button>
                </td>
                <td className="text-sm width: 100.408%; height: 18px; vertical-align: top;">
                  The ANSWERED field shows how many questions have been
                  answered.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 58px; text-align: left;">
                  <button
                    type="button"
                    className="py-[.75rem] px-[.75rem] flex items-start gap-x-2 text-sm font-bold rounded-md bg-[#1b3144] text-white border-none"
                  >
                    <span>TOTAL TIME LEFT</span>
                    <FontAwesomeIcon size={"lg"} icon={faEyeSlash} />
                    <span>00:45:00</span>
                  </button>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 58px;">
                  The TOTAL TIME LEFT field shows how much time is left in the
                  current test section. Select the EYE ICON to show or hide the
                  timer.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 40px; text-align: left;">
                  <button
                    type="button"
                    className="py-[.75rem] px-[.75rem] flex items-start gap-x-2 text-sm font-bold rounded-md bg-[#1b3144] text-white border-none"
                  >
                    <FontAwesomeIcon size={"lg"} icon={faStop} />
                    <span>END TEST</span>
                  </button>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 40px;">
                  Select the END TEST button to submit your answers and end the
                  current test section.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 16px; text-align: left;">
                  <h1
                    title="Focusable header, indicating current location at item 1 of 11"
                    className="utd-page-counter"
                  >
                    1 of 11
                  </h1>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 16px;">
                  The ITEM COUNTER shows your progress on the overall test. It
                  counts all the test questions, as well as the information and
                  instructions at the start of each section.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 53px; text-align: left;">
                  <button
                    type="button"
                    className="py-[.75rem] px-[.7rem] flex items-center gap-x-2 text-xs font-bold rounded-[3px] bg-transparent
                        text-gray-500 hover:bg-gray-500 focus:bg-gray-500
                     border-none  hover:text-white focus:outline-none  focus:text-white"
                  >
                    <FontAwesomeIcon size={"lg"} icon={faBookmark} />
                    FLAG
                  </button>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 53px;">
                  Select the FLAG button to add a flag label to the current
                  question.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 24px; text-align: left;">
                  <div
                    title="Example of a radio button"
                    className="utd-multiple-choice-option"
                  >
                    <input type="radio"></input>
                    <p className="inline-paragraph">A.&nbsp;NO CHANGE</p>
                  </div>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 24px;">
                  Select the circle next to your answer choice.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 33px; text-align: left;">
                  <div className="flex gap-1 p-[1px] justify-start">
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
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 33px;">
                  Select the PREV or NEXT button to move to the previous or next
                  question, respectively.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 16px; text-align: left;">
                  <div
                    title="Index button"
                    className="utd-button-side-menu-index background-color: rgb(233, 236, 239);"
                  >
                    <div className="utd-icon-bars">&nbsp;</div>
                    <label>Index</label>
                  </div>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 16px;">
                  Select the INDEX button to open or close the index panel. This
                  panel displays a list of all the questions in a test section,
                  along with a label for each question that has been answered or
                  flagged. Select a question within the index panel to navigate
                  to that question.
                  <p>&nbsp;</p>
                  <section
                    title="A list with Instructions and 3 questions. The Instructions and Question 1 have
                                            an Answered icon. Question 2 has a flag icon."
                    className="display: flex; background: none; box-shadow: none; padding: 10px; overflow-y: auto; margin: 0px; gap: 16px; flex: 1 1 0%; flex-direction: column;"
                  >
                    <article className="utd-index-entry">
                      <header className="utd-index-entry-header"></header>
                      <section className="utd-index-item answered">
                        <span className="utd-badge-answered">Answered</span>
                        <h6 className="utd-index-item-header">Help Screen</h6>
                        <p className="text-xs">
                          Help Screen This page contains descriptions of the
                          tools, buttons, and informational fields availa...
                        </p>
                      </section>
                    </article>
                    <article className="utd-index-entry current">
                      <header className="utd-index-entry-header"></header>
                      <section className="utd-index-item">
                        <h6 className="utd-index-item-header">Help Screen</h6>
                        <p className="text-xs">
                          Help Screen This page contains descriptions of the
                          tools, buttons, and informational fields availa...
                        </p>
                      </section>
                    </article>
                    <article className="utd-index-entry">
                      <header className="utd-index-entry-header"></header>
                      <section
                        data-tooltip="top"
                        className="utd-index-item answered"
                      >
                        <span className="utd-badge-answered">Answered</span>
                        <h6 className="utd-index-item-header">Information</h6>
                        <div role="alert" className="utd-tooltip">
                          Navigation disabled until the response is answered or
                          cleared
                        </div>
                        <p className="text-xs">
                          English Test Directions The next screen in this
                          section contains instructions about the English t...
                        </p>
                      </section>
                    </article>
                    <article className="utd-index-entry">
                      <header className="utd-index-entry-header"></header>
                      <section className="utd-index-item answered">
                        <span className="utd-badge-answered">Answered</span>
                        <h6 className="utd-index-item-header">Instructions</h6>
                        <p className="text-xs">
                          English Test - 75 questions In the passages that
                          follow, certain words and phrases are underlined...
                        </p>
                      </section>
                    </article>
                    <article className="utd-index-entry flagged">
                      <header className="utd-index-entry-header">
                        Question 1
                      </header>
                      <section className="utd-index-item">
                        <p className="text-xs">
                          Which choice most effectively emphasizes the
                          complexity of the paper sculptures?
                        </p>
                      </section>
                    </article>
                    <article className="utd-index-entry">
                      <header className="utd-index-entry-header">
                        Question 2
                      </header>
                      <section className="utd-index-item">
                        <p>&nbsp;</p>
                      </section>
                    </article>
                  </section>
                  <p>&nbsp;</p>
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 12px; text-align: left;">
                  <div
                    title="Help Screen button"
                    className="utd-button-side-menu-scenario background-color: rgb(233, 236, 239);"
                  >
                    <p className="utd-icon-envelope-open-text">&nbsp;</p>
                    <label>HELP&nbsp;SCREEN</label>
                  </div>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 12px;">
                  Select the HELP SCREEN button to open the help screen.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 12px; text-align: left;">
                  <div
                    title="Calculator button"
                    className="utd-button-side-menu-calculator background-color: rgb(233, 236, 239);"
                  >
                    <p className="utd-icon-calculator">&nbsp;</p>
                    <label>CALCULATOR</label>
                  </div>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 12px;">
                  Select the CALCULATOR button to open or close the calculator.
                  This tool is available only during the math test.
                </td>
              </tr>
              <tr className="border-className: inset; border-color: rgb(211, 211, 211);">
                <td className="width: 25.47%; vertical-align: top; height: 12px; text-align: left;">
                  <div
                    title="Highlighter Button"
                    className="utd-button-side-menu-highlighter background-color: rgb(233, 236, 239); height: 62px;"
                  >
                    <p className="utd-icon-highlighter">&nbsp;</p>
                    <label className="show-sm">Highlighter</label>
                  </div>
                </td>
                <td className="text-sm width: 100.408%; vertical-align: top; height: 12px;">
                  Select the HIGHLIGHTER button to turn highlighting on or off.
                  When the highlighter is on, you can select text in a passage
                  or question to highlight it. Highlighting applies only to the
                  current screen.
                  <p>&nbsp;</p>
                  <div
                    title="Clear Highlights button"
                    className="utd-button-side-menu-clear background-color: rgb(233, 236, 239); height: 62px;"
                  >
                    <p className="text-sm utd-icon-eraser">&nbsp;</p>
                    <label>Clear&nbsp;Highlights</label>
                  </div>
                  <p>&nbsp;</p>
                  <p className="text-sm">
                    Select CLEAR HIGHLIGHTS to remove all highlighting from the
                    current screen.
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <MainSectionBottombar />
    </div>
  );
}

export default MainSectionBody;
