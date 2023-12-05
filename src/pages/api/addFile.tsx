// import { storage, database, app } from "~/firebaseConfig";
// import { NextApiRequest, NextApiResponse } from "next";
// import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

// const addFiles = (req: NextApiRequest, res: NextApiResponse) => {
//   // const storageRef = ref(storage, `files/${file.name}`);
//   // const uploadTask = uploadBytesResumable(storageRef, file);
//   // uploadTask.on(
//   //   "state_changed",
//   //   (snapshot) => {
//   //     const progress = Math.round(
//   //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
//   //     );
//   //     console.log(`Upload is ${progress}% done`);
//   //   },
//   //   (error) => {
//   //     alert(error);
//   //   },
//   //   () => {
//   //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
//   //       res.status(201).json(downloadURL);
//   //     });
//   //   },
//   // );
// };

// export default addFiles;
