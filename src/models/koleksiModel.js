const db = require('../config/database');

const Koleksi = {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM koleksi ORDER BY id DESC');
    return rows;
  },

  async findById(id) {
    const [rows] = await db.query('SELECT * FROM koleksi WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ judul, sutradara, tahun, genre, status_nonton, rating, review }) {
    await db.query(
      'INSERT INTO koleksi (judul, sutradara, tahun, genre, status_nonton, rating, review) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [judul, sutradara, tahun, genre, status_nonton, rating === '' ? null : rating, review]
    );
  },

  async update(id, { judul, sutradara, tahun, genre, status_nonton, rating, review }) {
    await db.query(
      'UPDATE koleksi SET judul = ?, sutradara = ?, tahun = ?, genre = ?, status_nonton = ?, rating = ?, review = ? WHERE id = ?',
      [judul, sutradara, tahun, genre, status_nonton, rating === '' ? null : rating, review, id]
    );
  },

  async deleteById(id) {
    await db.query('DELETE FROM koleksi WHERE id = ?', [id]);
  }
};

module.exports = Koleksi;