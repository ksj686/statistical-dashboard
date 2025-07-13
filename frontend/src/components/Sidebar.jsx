import React from "react";
import LogoSidebar from "./LogoSidebar";

const Sidebar = () => {
  return (
    <>
      <div className="p-4">
        <LogoSidebar />
      </div>
      <div className="scroll-sidebar" data-simplebar="">
        <nav className="w-full flex flex-col sidebar-nav px-4 mt-5">
          <ul id="sidebarnav" className="text-gray-600 text-sm">
            <li className="text-xs font-bold pb-[5px]">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">HOME</span>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base  flex items-center relative  rounded-md text-gray-500  w-full"
                href="/dust-chart"
              >
                <i className="ti ti-chart-bar ps-2  text-2xl"></i>{" "}
                <span>Dust Chart</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base  flex items-center relative  rounded-md text-gray-500  w-full"
                href="/pm10-2023-chart"
              >
                <i className="ti ti-chart-dots ps-2  text-2xl"></i>{" "}
                <span>2023 PM10 Chart</span>
              </a>
            </li>

            {/* <li className="text-xs font-bold mb-4 mt-6">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">
                UI COMPONENTS
              </span>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/components/buttons.html"
              >
                <i className="ti ti-article ps-2 text-2xl"></i>{" "}
                <span>Buttons</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/components/alerts.html"
              >
                <i className="ti ti-alert-circle ps-2 text-2xl"></i>{" "}
                <span>Alerts</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/components/cards.html"
              >
                <i className="ti ti-cards ps-2 text-2xl"></i> <span>Card</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/components/forms.html"
              >
                <i className="ti ti-file-description ps-2 text-2xl"></i>{" "}
                <span>Forms</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/components/typography.html"
              >
                <i className="ti ti-typography ps-2 text-2xl"></i>{" "}
                <span>Typography</span>
              </a>
            </li>

            <li className="text-xs font-bold mb-4 mt-6">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">APPS</span>
            </li>
            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-ecommerce"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-ecommerce"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-basket ps-2 text-2xl"></i>
                    <span>Ecommerce</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-ecommerce"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-ecommerce"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Shop One</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Shop Two</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Details One</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Details Two</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i> <span>List</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Checkout</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-userprofile"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-userprofile"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-user-circle ps-2 text-2xl"></i>
                    <span>User Profile</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-userprofile"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-userprofile"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Profile One</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Profile Two</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-blog"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-blog"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-chart-donut-3 ps-2 text-2xl"></i>
                    <span>Blog</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-blog"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-blog"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Posts</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Details</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-mail ps-2 text-2xl"></i>{" "}
                  <span>Email</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-calendar ps-2 text-2xl"></i>{" "}
                  <span>Calendar</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-layout-kanban ps-2 text-2xl"></i>{" "}
                  <span>Kanban</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-message-dots ps-2 text-2xl"></i>{" "}
                  <span>Chat</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-notes ps-2 text-2xl"></i>{" "}
                  <span>Notes</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-phone ps-2 text-2xl"></i>{" "}
                  <span>Contact</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-list-details ps-2 text-2xl"></i>{" "}
                  <span>Contact List</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-file-text ps-2 text-2xl"></i>{" "}
                  <span>Invoice</span>
                </div>
              </a>
            </li>

            <li className="text-xs font-bold mb-4 mt-6">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">Pages</span>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-currency-dollar ps-2 text-2xl"></i>{" "}
                  <span>Pricing</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-help ps-2 text-2xl"></i> <span>FAQ</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-user-circle ps-2 text-2xl"></i>{" "}
                  <span>Account Setting</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-app-window ps-2 text-2xl"></i>{" "}
                  <span>Landing Page</span>
                </div>
              </a>
            </li>
            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-widgets"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-widgets"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-layout ps-2 text-2xl"></i>
                    <span>Widgets</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-widgets"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-widgets"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Cards</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Banners</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Charts</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Feeds Widgets</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Apps Widgets</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Data Widgets</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <li className="text-xs font-bold mb-4 mt-6">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">UI</span>
            </li>
            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-uielements"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-uielements"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-layout-grid ps-2 text-2xl"></i>
                    <span>Ui Elements</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-uielements"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-uielements"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Accordion</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Badges</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Buttons</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Breadcrumb</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Carousel</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Chat Bubbles</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>

                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Dropdowns</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>DatePicker</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>devices</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i> <span>Grid</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i> <span>List</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i> <span>Link</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>

                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Modals</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Notification</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Offcanvas</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Progress Bar</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Pagination</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Ratings</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>

                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Scrollspy</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Spinner</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Stepper</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Skeleton</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i> <span>Tab</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Typography</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>

                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Tooltip</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Timeline</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Toasts</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-cards"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-cards"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-cards ps-2 text-2xl"></i>
                    <span>Cards</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-cards"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-cards"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Base Cards</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Customs Cards</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Weather Cards</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <li className="text-xs font-bold mb-4 mt-6">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">FORMS</span>
            </li>
            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-formelements"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-formelements"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-file-text ps-2 text-2xl"></i>
                    <span>Form Elements</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-formelements"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-formelements"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Form Input</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Input Groups</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Checkbox & Radios</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Input Grid</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Input Number</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Advanced Pass</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <li className="text-xs font-bold mb-4 mt-6">
              <i className="ti ti-dots nav-small-cap-icon text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">
                TABLES
              </span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-table ps-2 text-2xl"></i>{" "}
                  <span>Basic</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-table-row ps-2 text-2xl"></i>{" "}
                  <span>Highlighted</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-border-all ps-2 text-2xl"></i>{" "}
                  <span>Miscellaneous</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-table-column ps-2 text-2xl"></i>{" "}
                  <span>Editable</span>
                </div>
              </a>
            </li>

            <li className="text-xs font-bold mb-4 mt-8">
              <i className="ti ti-dots nav-small-cap-icon  text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">
                DATA TABLES
              </span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-air-conditioning-disabled ps-2 text-2xl"></i>{" "}
                  <span>Datatable</span>
                </div>
              </a>
            </li>

            <li className="text-xs font-bold mb-4 mt-8">
              <i className="ti ti-dots nav-small-cap-icon  text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">
                CHARTS
              </span>
            </li>
            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-apexcharts"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-apexcharts"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-chart-pie ps-2 text-2xl"></i>
                    <span>Apex Charts</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-apexcharts"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-apexcharts"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Line Chart</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Area Chart</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Bar Chart</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Pie Chart</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Radial Chart</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Radar Chart</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <li className="text-xs font-bold mb-4 mt-8">
              <i className="ti ti-dots nav-small-cap-icon  text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">AUTH</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-alert-circle ps-2 text-2xl"></i>{" "}
                  <span>Error</span>
                </div>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/pages/authentication-login.html"
              >
                <i className="ti ti-login ps-2 text-2xl"></i>{" "}
                <span>Boxed Login</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-login ps-2 text-2xl"></i>{" "}
                  <span>Side Login</span>
                </div>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/pages/authentication-register.html"
              >
                <i className="ti ti-user-plus ps-2 text-2xl"></i>{" "}
                <span>Boxed Register</span>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-user-plus ps-2 text-2xl"></i>{" "}
                  <span>Side Register</span>
                </div>
              </a>
            </li>
            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-forgotpassword"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-forgotpassword"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-rotate ps-2 text-2xl"></i>
                    <span>Forgot Password</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-forgotpassword"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-forgotpassword"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Side Forgot Pwd</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Boxed Forgot Pwd</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="hs-accordion-group">
              <div
                className="hs-accordion sidebar-item"
                id="hs-basic-with-title-and-arrow-stretched-heading-twosteps"
              >
                <button
                  className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center relative  rounded-md text-gray-500  w-full hs-accordion-toggle hs-accordion-active:text-blue-600 justify-between"
                  aria-expanded="false"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-twosteps"
                >
                  <div className="flex items-center gap-3">
                    <i className="ti ti-zoom-code ps-2 text-2xl"></i>
                    <span>Two Steps</span>
                  </div>
                  <div className="mr-5">
                    <svg
                      className="hs-accordion-active:hidden block size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                    <svg
                      className="hs-accordion-active:block hidden size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6"></path>
                    </svg>
                  </div>
                </button>
                <div
                  id="hs-basic-with-title-and-arrow-stretched-collapse-twosteps"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-twosteps"
                >
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Side Two Steps</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                  <a
                    className="gap-4 py-2.5 my-1 px-[14px] text-sm flex items-center justify-between relative  rounded-md text-gray-500  w-full"
                    href="#"
                  >
                    <div className="flex items-center gap-4">
                      <i className="ti ti-circle text-xs"></i>{" "}
                      <span>Boxed Two Steps</span>
                    </div>
                    <span className="text-white bg-blue-700 rounded-3xl px-2 text-xs py-0.5">
                      Pro
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-settings ps-2 text-2xl"></i>{" "}
                  <span>Maintenance</span>
                </div>
              </a>
            </li>

            <li className="text-xs font-bold mb-4 mt-8">
              <i className="ti ti-dots nav-small-cap-icon  text-lg hidden text-center"></i>
              <span className="text-xs text-gray-400 font-semibold">EXTRA</span>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base flex items-center justify-between relative rounded-md text-gray-500 w-full"
                href="#"
              >
                <div className="flex items-center gap-2">
                  <i className="ti ti-mood-happy ps-2 text-2xl"></i>{" "}
                  <span>Solar Icons</span>
                </div>
              </a>
            </li>
            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/pages/icons.html"
              >
                <i className="ti ti-mood-happy ps-2 text-2xl"></i>{" "}
                <span>Tabler Icons</span>
              </a>
            </li>

            <li className="sidebar-item">
              <a
                className="sidebar-link gap-3 py-2.5 my-1 text-base   flex items-center relative  rounded-md text-gray-500  w-full"
                href="/pages/sample-page.html"
              >
                <i className="ti ti-aperture ps-2 text-2xl"></i>{" "}
                <span>Sample Page</span>
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
