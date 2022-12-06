import formidable from "formidable";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default function handler(req, res) {
  const form = formidable({});
  form.parse(req, async (error, fields, files) => {
    const { filepath } = files.image;

    const fileUpload = await cloudinary.v2.uploader.upload(filepath);

    res.status(201).json({
      publicId: fileUpload.public_id,
      format: fileUpload.format,
      resourceType: fileUpload.resource_type,
      secureUrl: fileUpload.secure_url,
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
