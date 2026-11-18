const Koleksi = require('../models/koleksiModel');

const STATUS = ['Belum Ditonton', 'Selesai'];

// validasi dipakai untuk tambah dan edit
function validasi({ judul, sutradara, tahun, genre, status_nonton, rating, review }) {
  if (!judul || !sutradara || !genre) return 'Judul, sutradara, dan genre wajib diisi.';
  if (!review) return 'Review wajib diisi.';
  const t = Number(tahun);
  if (!Number.isInteger(t) || t < 1888 || t > 2100) return 'Tahun tidak valid.';
  if (!STATUS.includes(status_nonton)) return 'Status tidak valid.';
  if (rating !== '' && (Number(rating) < 0 || Number(rating) > 10)) return 'Rating harus 0-10.';
  return null;
}

exports.index = async (req, res) => {
  try {
    const koleksi = await Koleksi.findAll();
    res.render('index', { koleksi, error: null, STATUS });
  } catch (err) {
    res.status(500).send('Gagal mengambil data: ' + err.message);
  }
};

exports.store = async (req, res) => {
  try {
    const error = validasi(req.body);
    if (error) {
      const koleksi = await Koleksi.findAll();
      return res.render('index', { koleksi, error, STATUS });
    }
    await Koleksi.create(req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Gagal menyimpan data: ' + err.message);
  }
};

exports.edit = async (req, res) => {
  try {
    const film = await Koleksi.findById(req.params.id);
    if (!film) return res.redirect('/');
    res.render('edit', { film, error: null, STATUS });
  } catch (err) {
    res.status(500).send('Gagal mengambil data: ' + err.message);
  }
};

exports.update = async (req, res) => {
  try {
    const error = validasi(req.body);
    if (error) {
      const film = await Koleksi.findById(req.params.id);
      return res.render('edit', { film, error, STATUS });
    }
    await Koleksi.update(req.params.id, req.body);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Gagal mengubah data: ' + err.message);
  }
};

exports.destroy = async (req, res) => {
  try {
    await Koleksi.deleteById(req.params.id);
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Gagal menghapus data: ' + err.message);
  }
};