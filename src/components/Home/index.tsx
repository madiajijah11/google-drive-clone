import React from "react";
import Topbar from "../Topbar";
import UploadFiles from "../UploadFiles/index";
import ShowFiles from "../ShowFiles";
import { useFetchSession } from "~/hooks/useSession";

export default function HomeComponent() {
  const { session } = useFetchSession();

  return (
    <div>
      <Topbar />
      {session ? (
        <>
          <UploadFiles parentId="" />
          <ShowFiles parentId="" />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
