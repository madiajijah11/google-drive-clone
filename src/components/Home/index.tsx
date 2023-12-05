import React from "react";
import Topbar from "../Topbar";
import UploadFiles from "../UploadFiles/index";
import ShowFiles from "../ShowFiles";

export default function HomeComponent() {
  return (
    <div>
      <Topbar />
      <UploadFiles parentId="" />
      <ShowFiles parentId="" />
    </div>
  );
}
