import React from "react";
import { fetchFiles } from "~/hooks/fetchFiles";
import { AiFillFileText, AiFillFolder } from "react-icons/ai";
import { useRouter } from "next/router";
import { useFetchSession } from "~/hooks/useSession";

export default function ShowFiles({ parentId }: any) {
  const { session } = useFetchSession();
  let { fileList } = fetchFiles(parentId, session?.user.email || "");

  const openFile = (fileLink: string) => {
    window.open(fileLink);
  };

  const router = useRouter();

  return (
    <div className="grid w-full grid-cols-5 gap-5">
      {fileList.map((file: any) => {
        return (
          <div
            key={file.id}
            className="flex h-52 w-52 cursor-pointer flex-col items-center justify-center rounded-lg bg-slate-500 p-1 hover:bg-slate-600"
            onClick={() =>
              file.isFolder
                ? router.push(`/folder?id=${file.id}`)
                : openFile(file.imageLink)
            }
          >
            {file.isFolder ? (
              <>
                <AiFillFolder size={104} />
                <p className="font-semibold text-black">{file?.folderName}</p>
              </>
            ) : (
              <>
                {/* <AiFillFileText size={104} /> */}
                <img
                  src={file?.imageLink}
                  alt={file?.imageLink}
                  className="h-50 w-50"
                />
                <p className="font-semibold text-black">{file?.imageName}</p>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
