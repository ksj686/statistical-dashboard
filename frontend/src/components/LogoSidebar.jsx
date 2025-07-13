import React from 'react';

const LogoSidebar = () => {
  return (
    <div className="flex items-center justify-between">
      <a href="/" className="text-nowrap logo-img">
        <img src="/assets/images/logos/logo-light.svg" className="dark-logo" alt="Logo-Dark" />
        {/* <img src="/assets/images/logos/logo-light.svg" className="light-logo" alt="Logo-light" /> */}
      </a>
      <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
        <i className="ti ti-x fs-8 text-muted"></i>
      </div>
    </div>
  );
};

export default LogoSidebar;