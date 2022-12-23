const cloudinary = require('cloudinary');

function uploadFile(req, res, next) {
  try {
    cloudinary.uploader
      .upload_stream((result) => {
        res.status(200).json({ success: true, fileUrl: result.secure_url });
        next();
      })
      .end(req.file.buffer);
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
}

module.exports = uploadFile;
