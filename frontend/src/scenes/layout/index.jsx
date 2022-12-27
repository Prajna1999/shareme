import React from "react";

import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1 className="text-3xl">Layout</h1>

      <Outlet />
    </div> 
  );
}

export default Layout;
