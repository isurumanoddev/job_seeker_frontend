import React from "react";

function DashboardBreadcrumb(props) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center h-8 px-8  ">
        <div className="flex items-center text-3xl font-semibold">{props.left}</div>
        <div className="flex items-center">{props.right}</div>
      </div>
    </div>
  );
}

export default DashboardBreadcrumb;
