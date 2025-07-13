import React from 'react';
import NotificationDropdown from './NotificationDropdown';
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  return (
    <nav className="w-ful flex items-center justify-between" aria-label="Global">
      <ul className="icon-nav flex items-center gap-4">
        <li className="relative xl:hidden">
          <a className="text-xl icon-hover cursor-pointer text-heading"
            id="headerCollapse" data-hs-overlay="#application-sidebar-brand"
            aria-controls="application-sidebar-brand" aria-label="Toggle navigation" href="#">
            <i className="ti ti-menu-2 relative z-1"></i>
          </a>
        </li>
        <li className="relative">
          <NotificationDropdown />
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <ProfileDropdown />
      </div>
    </nav>
  );
};

export default Header;