import multer from "multer";

export const singleUpload = multer().single("photo");
export const mutliUpload = multer().array("photos", 5);
