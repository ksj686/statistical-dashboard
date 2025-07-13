import React from 'react';

const NotificationDropdown = () => {
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right] sm:[--trigger:hover]">
      <a className="relative hs-dropdown-toggle cursor-pointer align-middle rounded-full">
        <i className="ti ti-bell-ringing text-2xl text-gray-400"></i>
        <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-red-500"></span>
      </a>
      <div className="card hs-dropdown-menu transition-[opacity,margin] rounded-md duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max  w-[300px] hidden z-[12]"
        aria-labelledby="hs-dropdown-custom-icon-trigger">
        <div className="card-body p-0 py-2">
          <div className="flex items-center justify-between mb-4 px-4 pt-2">
            <h4 className="text-lg text-gray-500 font-semibold">Notifications</h4>
            <span className="bg-blue-600 text-white text-xs font-semibold rounded-full px-2 py-1">5 New</span>
          </div>
          <ul className="list-none">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-red-400 text-red-500">
                  <i className="ti ti-message-dots text-xl"></i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-sm font-semibold">Roman Joined the Team!</h6>
                  <span className="text-gray-400 text-xs font-normal">Congratulate him</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-400 text-blue-500">
                  <i className="ti ti-chart-bar text-xl"></i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-sm font-semibold">New report has been received</h6>
                  <span className="text-gray-400 text-xs font-normal">25 sec ago</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-teal-400 text-teal-500">
                  <i className="ti ti-shopping-cart text-xl"></i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-sm font-semibold">New order received</h6>
                  <span className="text-gray-400 text-xs font-normal">Amet minim mollit non
                    deserunt
                    ullamco est sit aliqua dolor do</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-yellow-400 text-yellow-500">
                  <i className="ti ti-user-check text-xl"></i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-sm font-semibold">Account
                    created</h6>
                  <span className="text-gray-400 text-xs font-normal">jskdfjksd
                    jksdfjkdsj</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-blue-400 text-blue-500">
                  <i className="ti ti-coins text-xl"></i>
                </div>
                <div className="flex flex-col">
                  <h6 className="text-gray-500 text-sm font-semibold">Payment
                    received</h6>
                  <span className="text-gray-400 text-xs font-normal">It is a long established
                    fact
                    that a reader will be distracted</span>
                </div>
              </a>
            </li>
          </ul>
          <div className="py-2 px-4 mt-2">
            <a href="#"
              className="py-2 px-4 text-white bg-blue-600 rounded-md text-center w-full block hover:bg-blue-700">All
              Notifications</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDropdown;