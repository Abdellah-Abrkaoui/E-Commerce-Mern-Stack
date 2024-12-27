import multer from "multer";

const storage = multer.memoryStorage({
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
