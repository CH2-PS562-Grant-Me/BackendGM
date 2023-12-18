const axios = require('axios');

const recomendScholarship = async (req, res) => {
  try {
    const data = req.body

    const getPredict = await axios.post(process.env.URL_MODEL, data)

    const result = getPredict.data

    const scholarship = await Scholarship.findAll({
      where: {
        jenis_beasiswa: result.jenis_beasiswa
      }
    })

    if (scholarship) {
      const recipient = await Recipient.create(data)
      res.status(200).json({
        status: 200,
        message: 'success',
        data: scholarship
      })
    }
  }
  catch (error) {
    res.status(500).json({ error: 'Gagal melakukan prediksi' });
  }
}

module.exports = { recomendScholarship };