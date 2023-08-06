import multer from "multer";
import storage from "../utils/multerStorage.js";

const studentFormData = multer({
  storage: storage,
}).fields([
  {
    name: "photo",
    maxCount: 1,
  },
  {
    name: "gallery",
    maxCount: 5,
  },
  {
    name: "cv",
    maxCount: 1,
  },
]);

export default studentFormData;
