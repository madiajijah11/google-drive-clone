import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "~/firebaseConfig";
import type { File } from "~/interface/Index";

let files = collection(database, "files");

export const fetchFiles = (parentId: any) => {
  const [fileList, setFileList] = useState<File[]>([]);

  const getFolder = () => {
    if (parentId) {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((doc) => {
              return { ...doc.data(), id: doc.id } as File;
            })
            .filter((item) => item.parentId === parentId),
        );
      });
    } else {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs
            .map((doc) => {
              return { ...doc.data(), id: doc.id } as File;
            })
            .filter((item) => item.parentId === ""),
        );
      });
    }
  };

  useEffect(() => {
    getFolder();
  }, [parentId]);

  return { fileList };
};
