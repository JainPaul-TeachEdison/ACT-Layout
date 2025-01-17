import React from "react";
//icons
import {
  faBookmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainSectionBody() {
  return (
    <div className="max-w-[95%] max-h-[93svh] my-2 ">
      <div className="flex gap-[2px] bg-white mx-[10px] px-[10px] py-[8px] items-center justify-between">
        <span>Help Screen</span>
        <button
          type="button"
          className="py-[.375rem] px-[.75rem] flex items-center justify-around gap-x-2 text-sm font-bold rounded-md bg-transparent text-gray-500 border-none hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-500 focus:text-white"
        >
          <FontAwesomeIcon icon={faBookmark} />
          FLAG
        </button>
      </div>
      <div
        id="scrollspy-scrollable-parent-1"
        className="bg-white mx-[10px] max-h-[85svh] overflow-y-auto"
      >
        <div id="scrollspy-1" className="mt-3 space-y-4">
          <div id="first">
            <h3 className="text-lg font-semibold">First</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="second">
            <h3 className="text-lg font-semibold">Second</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="third">
            <h3 className="text-lg font-semibold">Third</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="fourth">
            <h3 className="text-lg font-semibold">Fourth</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="fifth">
            <h3 className="text-lg font-semibold">Fifth</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
        </div>
        <div id="scrollspy-1" className="mt-3 space-y-4">
          <div id="first">
            <h3 className="text-lg font-semibold">First</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="second">
            <h3 className="text-lg font-semibold">Second</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="third">
            <h3 className="text-lg font-semibold">Third</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="fourth">
            <h3 className="text-lg font-semibold">Fourth</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>

          <div id="fifth">
            <h3 className="text-lg font-semibold">Fifth</h3>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This is some placeholder content for the scrollspy page. Note that
              as you scroll down the page, the appropriate navigation link is
              highlighted. It's repeated throughout the component example. We
              keep adding some more example copy here to emphasize the scrolling
              and highlighting.
            </p>
          </div>
          <div id="scrollspy-1" className="mt-3 space-y-4">
            <div id="first">
              <h3 className="text-lg font-semibold">First</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="second">
              <h3 className="text-lg font-semibold">Second</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="third">
              <h3 className="text-lg font-semibold">Third</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="fourth">
              <h3 className="text-lg font-semibold">Fourth</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>

            <div id="fifth">
              <h3 className="text-lg font-semibold">Fifth</h3>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This is some placeholder content for the scrollspy page. Note
                that as you scroll down the page, the appropriate navigation
                link is highlighted. It's repeated throughout the component
                example. We keep adding some more example copy here to emphasize
                the scrolling and highlighting.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-[2px] bg-white mx-[10px] px-[10px] py-[8px] justify-end">
        <button
          type="button"
          className="py-[.375rem] px-[.75rem] flex items-center justify-around gap-x-2 text-sm font-bold rounded-md bg-transparent text-gray-500 border-none hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-500 focus:text-white"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          PREV
        </button>
        <button
          type="button"
          className="py-[.375rem] px-[.75rem] flex items-center justify-around gap-x-2 text-sm font-bold rounded-md bg-transparent text-gray-500 border-none hover:bg-gray-500 hover:text-white focus:outline-none focus:bg-gray-500 focus:text-white"
        >
          NEXT
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default MainSectionBody;
