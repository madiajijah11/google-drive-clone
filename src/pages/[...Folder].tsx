import React from "react";
import { useRouter } from "next/router";
import UploadFiles from "~/components/UploadFiles";
import ShowFiles from "~/components/ShowFiles";
import Topbar from "~/components/Topbar";
import { useFetchSession } from "~/hooks/useSession";
import Button from "~/components/common/Button";

export default function Folder() {
  const router = useRouter();
  const { session } = useFetchSession();
  let parentId = router?.query?.id;

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <main className="flex-start flex min-h-screen items-center justify-center">
        <div>
          <Topbar />
          <Button
            btnClass="btn-warning btn btn-wide absolute left-5 top-20"
            title="Go back"
            onClick={() => goBack()}
          />
          {session ? (
            <>
              <UploadFiles parentId={parentId} />
              <ShowFiles parentId={parentId} />
            </>
          ) : (
            <></>
          )}
        </div>
      </main>
    </>
  );
}
