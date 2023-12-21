const { User, Profile } = require('../models');
const { Storage } = require('@google-cloud/storage');
const path = require('path');

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT,
  credentials: {
    client_email: process.env.GCLOUD_CLIENT_EMAIL,
    private_key: process.env.GCLOUD_PRIVATE_KEY
  },
});

const bucket = storage.bucket(process.env.GCS_BUKCET);

const getProfile = async (req, res) => {
  try {
    const user_id = req.params.user_id;

    // Cari pengguna berdasarkan ID
    const user = await Profile.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({ success: true, profile: user });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateProfile = async (req, res) => {

  const user_id = req.params.user_id;
  const file = req.file;

  const user = await Profile.findByPk(user_id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  // Check if file exists
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  // Check file extension
  const allowedExtensions = ['.png', '.jpg', '.jpeg'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    return res.status(400).json({
      status: 'fail',
      message: 'Hanya dapat menggunakan file gambar (.png, .jpg atau .jpeg)'
    });
  }

  // Check if user exists

  // Upload the file to Google Cloud Storage
  const folderPath = 'Profile';
  const blob = bucket.file(`${folderPath}/${file.originalname}`);
  const blobStream = blob.createWriteStream();

  blobStream.on("error", (err) => {
    return res.status(400).json({ message: err.message });
  });

  blobStream.on('finish', async () => {
    console.log('success')
  });

  blobStream.end(file.buffer);
  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

  // Update the profile with the image URL
  await Profile.update(
    { img_url: publicUrl},
    { where: { user_id } }
  );

  res.status(200).json({
    status: true,
    user,
  });
};

module.exports = { getProfile, updateProfile }