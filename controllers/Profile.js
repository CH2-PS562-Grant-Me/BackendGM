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

    // Ambil informasi profil
    // const userProfile = {
    //   nama: user.nama,
    //   email: user.email,
    //   img_url: user.Profile ? user.Profile.img_url : null,
    // };

    return res.status(200).json({ success: true, profile: user });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateProfile = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const file = req.file;

    const ext = path.extname(file.originalname).toLowerCase();

    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
      res
        .status(400)
        .json({
          status: 'fail',
          message: 'Hanya dapat menggunakan file gambar (.png, .jpg atau .jpeg)'
        });
    }

    if (!file) {
      res.status(400).json({ message: 'No file uploaded' });
    }

    const user = await Profile.findOne({ where: { user_id } });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
    }


    // Upload the file to Google Cloud Storage
    const folderPath = 'Profile'
    const blob = bucket.file(`${folderPath}/${file.originalname}`);
    const blobStream = blob.createWriteStream({
    });

    blobStream.on("error", (err) => {
      res.status(400).json(
        {
          message: err.message
        }
      )
    });

    blobStream.on('finish', async () => {
      const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

      // Update the profile with the image URL
      await Profile.update({ img_url: publicUrl },
        {
          where: {
            user_id: user_id
          }
        });

      res.status(200).json({
        success: true,
        user
      });
    });

    blobStream.end(file.buffer);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
module.exports = { getProfile, updateProfile }