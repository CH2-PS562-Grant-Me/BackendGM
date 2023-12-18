const { User, Profile } = require('../models');
const Storage = require('@google-cloud/storage');

// const storage = new Storage({
  
// })


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
    const { img_url } = req.body;

    // Cari user berdasarkan ID
    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Cek apakah user memiliki profil
    let profile = await Profile.findOne({ where: { user_id: user_id } });

    if (!profile) {
      // Jika belum ada profil, buat profil baru
      profile = await Profile.create({ user_id: user_id, img_url });
    } else {
      // Jika sudah ada profil, update img_url
      profile.img_url = img_url;
      await profile.save();
    }

    return res.status(200).json({ message: 'Profile picture updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { getProfile, updateProfile }