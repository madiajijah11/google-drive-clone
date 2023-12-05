import React from "react";
import { useRouter } from "next/router";
import UploadFiles from "~/components/UploadFiles";
import ShowFiles from "~/components/ShowFiles";
import Topbar from "~/components/Topbar";

export default function Folder() {
  const router = useRouter();
  let parentId = router?.query?.id;
  return (
    <>
      <main className="flex-start flex min-h-screen items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div>
          <Topbar />
          <UploadFiles parentId={parentId} />
          <ShowFiles parentId={parentId} />
        </div>
      </main>
    </>
  );
}
