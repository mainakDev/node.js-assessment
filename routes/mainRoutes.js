const express = require('express');
const {getRoute, postRoute} = require('../controllers/routeController')

const router = express.Router()


router.get('/', getRoute);
router.post('/', postRoute);

module.exports = router;