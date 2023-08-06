import express from "express";
import multer from "multer";
import studentFormData from "../../middleware/MulterMiddleware.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "student get router is ok" });
});

router.post("/", studentFormData, (req, res) => {
  // console.log(req.files);

  console.log(req.files.gallery);

  // Gallery image Path generate using forEach loop

  const gallery_path = [];

  req.files.gallery.forEach(item => {
    gallery_path.push(item.path);
  });

  const { name, age } = req.body;

  res.status(200).json({
    name,
    age,
    photo: req.files.photo[0].path,
    cv: req.files.cv[0].path,
    // gallery: gallery_path, or
    gallery: [...gallery_path],
  });
});

// Crate Student Route

export default router;
