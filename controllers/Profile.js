const { User, Profile } = require('../models');
// const Storage = require('@google-cloud/storage');

// const storage = new Storage({
//   projectId: process.env.GCLOUD_PROJECT,
//   credentials: {
//     client_email: process.env.GCLOUD_CLIENT_EMAIL,
//     private_key: process.env.GCLOUD_PRIVATE_KEY
//   }
// });

// const bucket = storage.bucket(process.env.GCS_BUCKET);

const getProfile = async (req, res) => {
  try {
    const { user_id } = req.params;

    // Cari pengguna berdasarkan ID
    const user = await User.findByPk(user_id, {
      include: [{
        model: Profile,
        attributes: ['img_url'],
      }],
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Ambil informasi profil
    const userProfile = {
      nama: user.nama,
      email: user.email,
      img_url: user.Profile ? user.Profile.img_url : null,
    };

    return res.status(200).json({ success: true, profile: userProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


const updateProfile = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Cari user berdasarkan ID
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cek apakah user memiliki profil
    let profile = await Profile.findOne({ where: { user_id: user_id } });

    blobStream.on('error', (err) => {
      console.error(err);
      res.status(500).json({ message: 'Error uploading file' });
    });

    blobStream.on('finish', () => {
      res.status(200).json({ message: 'File uploaded successfully', data: profile });
    });

    blobStream.end(file.buffer);

    return res.status(200).json({ message: 'Profile picture updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { getProfile, updateProfile }