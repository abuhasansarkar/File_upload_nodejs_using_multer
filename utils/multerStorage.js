import multer from "multer";

//  Create Multer Storage
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    if (file.fieldname === "cv") {
      const { name, age } = req.body;
      cb(null, name + age + "_cv" + "_" + file.originalname);
    } else {
      cb(null, Date.now() + "_" + file.originalname);
    }
  },
  destination: (req, file, cb) => {
    console.log(file);
    if (file.fieldname === "photo") {
      cb(null, "public/photos");
    }
    if (file.fieldname === "gallery") {
      cb(null, "public/gallery");
    }
    if (file.fieldname === "cv") {
      cb(null, "public/cv");
    }
  },
});

export default storage;
