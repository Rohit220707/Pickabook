import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("image"), (req, res) => {
  console.log("Request received");

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  console.log("File name:", req.file.originalname);
  console.log("File size:", req.file.size);

  return res.status(200).json({
    imageUrl: "https://placehold.co/512x512/png"
  });
});

export default router;
