import React, { ChangeEvent, useState } from "react";
import Button from "../common/Button";
import { fileUpload } from "~/API/FileUpload";
import Progress from "../common/Progress";
import { addFolder } from "~/API/Firestore";
import { useFetchSession } from "~/hooks/useSession";

export default function UploadFiles({ parentId }: any) {
  const { session } = useFetchSession();
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    let file = event.target.files?.[0];
    fileUpload(file, setProgress, parentId, session?.user.email || "");
  };
  const [isFolderVisible, setIsFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("New Folder");
  const createFolder = () => {
    let payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email || "",
    };
    addFolder({ ...payload, fileList: [] });
  };
  return (
    <div className="absolute left-5 top-5 flex items-center space-x-4">
      <Button
        onClick={() => setIsFileVisible(!isFileVisible)}
        btnClass="btn-primary"
        title="Add a file"
      />
      {isFileVisible ? (
        <input
          onChange={(event) => uploadFile(event)}
          type="file"
          className="file-input w-full max-w-xs"
        />
      ) : (
        <></>
      )}
      <Button
        onClick={() => setIsFolderVisible(!isFolderVisible)}
        btnClass="btn-primary"
        title="Create a folder"
      />
      {isFolderVisible ? (
        <>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            value={folderName}
            onChange={(event) => setFolderName(event.target.value)}
          />
          <Button
            onClick={() => createFolder()}
            btnClass="btn-secondary"
            title="Create"
          />
        </>
      ) : (
        <></>
      )}
      <div className="">
        {progress === 0 || progress === 100 ? (
          <></>
        ) : (
          <Progress progress={progress} />
        )}
      </div>
    </div>
  );
}
