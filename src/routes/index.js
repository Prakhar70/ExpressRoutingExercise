const express = require('express');
const { homePingController } = require('../controllers/homeController');

const router = express.Router();// express router object

router.get('/home',homePingController);

router.get('/homecoming', homePingController);

module.exports = router;