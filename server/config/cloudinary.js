import { v2 as cloudinary } from 'cloudinary';

const {
  CLOUDINARY_API_KEY,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET
} = process.env;
cloudinary.config({
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  cloud_name: CLOUDINARY_CLOUD_NAME
});

/**
 * This class contains methods
 * configure and handle image-related operations
 */
class Cloudinary {
  /**
        * This method uploads image to cloudinary.
        * @param {array} image path of images.
        * @returns {string} URls of images.
        */
  static async uploadImagesOnline(image) {
    try {
      const uploadedImage = cloudinary.uploader.upload(image);
      const awaitedUploadedImage = await uploadedImage;
      return awaitedUploadedImage.url;
    } catch (error) {
      return error;
    }
  }
}
export default Cloudinary;
