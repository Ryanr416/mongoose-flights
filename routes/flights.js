const express = require('express');
const router = express.Router();

const flightsCtrl = require('../controllers/flights');
	

router.get('/flights/index', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.post('/', flightsCtrl.create);


	
module.exports = router;
