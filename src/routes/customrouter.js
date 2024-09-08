const express = require('express');
const { homePingController } = require('../controllers/homeController');

const router = express.Router();// express router object

router.get('/custom1',homePingController);

router.get('/custom2', homePingController);

module.exports = router;