import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import path from 'path';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, CLOUDINARY_CLOUD_NAME } from './constants';

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});
export const upload = multer({ storage: multer.memoryStorage() });
export const TempDir = path.join(process.cwd(), 'tmp_uploads');

export function uploadToCloudinaryAsStream(buffer: Buffer, options: any) {
  const result = new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(options, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });

    stream.end(buffer);
  });
  return result;
}
