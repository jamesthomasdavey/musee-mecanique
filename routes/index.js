const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('./landing', { pageTitle: 'Musée Mécanique' });
});

router.get('/welcome', (req, res) => {
  res.render('./welcome');
});
router.get('/our-history', (req, res) => {
  res.render('./our-history');
});
router.get('/gallery', (req, res) => {
  res.render('./gallery');
});
router.get('/shop', (req, res) => {
  res.render('./shop');
});

module.exports = router;
