import React from 'react';

const ProfileDropdown = () => {
  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right] sm:[--trigger:hover]">
      <a className="relative hs-dropdown-toggle cursor-pointer align-middle rounded-full">
        <img src="/assets/images/profile/user-1.jpg" alt="user" className="rounded-full w-8 h-8" />
      </a>
      <div className="card hs-dropdown-menu transition-[opacity,margin] rounded-md duration hs-dropdown-open:opacity-100 opacity-0 mt-2 min-w-max  w-[250px] hidden z-[12]"
        aria-labelledby="hs-dropdown-custom-icon-trigger">
        <div className="card-body p-0 py-2">
          <div className="py-3 px-4 border-b border-gray-200">
            <p className="text-gray-400 text-sm">
              <span className="font-semibold">Good Morning,</span>
              <span className="font-medium">Roman Joined the Team!</span>
            </p>
          </div>
          <ul className="list-none">
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <i className="ti ti-user text-xl"></i>
                <p className="text-sm text-gray-500 font-normal">My Profile</p>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <i className="ti ti-mail text-xl"></i>
                <p className="text-sm text-gray-500 font-normal">My Account</p>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200">
                <i className="ti ti-list-check text-xl"></i>
                <p className="text-sm text-gray-500 font-normal">My Task</p>
              </a>
            </li>
          </ul>
          <div className="py-2 px-4 mt-2">
            <a href="#"
              className="py-2 px-4 text-white bg-blue-600 rounded-md text-center w-full block hover:bg-blue-700">Log
              Out</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;