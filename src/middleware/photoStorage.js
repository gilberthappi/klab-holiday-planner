/* eslint-disable import/no-extraneous-dependencies */
import multer from 'multer';

export const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'tour_assets');
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: 'tour_assets/', storage });
export const uploads = upload.single('image');