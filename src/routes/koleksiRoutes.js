const express = require('express');
const router = express.Router();
const koleksiController = require('../controllers/koleksiController');

router.get('/', koleksiController.index);
router.post('/koleksi', koleksiController.store);
router.get('/koleksi/:id/edit', koleksiController.edit);
router.post('/koleksi/:id/update', koleksiController.update);
router.post('/koleksi/:id/delete', koleksiController.destroy);

module.exports = router;