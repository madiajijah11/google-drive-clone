import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "~/firebaseConfig";
import type { File } from "~/interface/Index";

let files = collection(database, "files");

export const fetchFiles = (parentId: any, userEmail: string) => {
  const [fileList, setFileList] = useState<File[]>([]);
  let emailQuery = query(files, where("userEmail", "==", userEmail));
  const getFolder = () => {
    if (userEmail) {
      if (parentId) {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((doc) => {
                return { ...doc.data(), id: doc.id } as File;
              })
              .filter((item) => item.parentId === parentId),
          );
        });
      } else {
        onSnapshot(emailQuery, (response) => {
          setFileList(
            response.docs
              .map((doc) => {
                return { ...doc.data(), id: doc.id } as File;
              })
              .filter((item) => item.parentId === ""),
          );
        });
      }
    }
  };

  useEffect(() => {
    getFolder();
  }, [parentId, userEmail]);

  return { fileList };
};
