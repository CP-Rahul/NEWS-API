const express = require('express');

const newsRoutes = require('./news-routes');

const router = express.Router();

router.use('/news', newsRoutes);

module.exports = router;