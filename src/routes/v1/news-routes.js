const express = require('express');

const { NewsController } = require('../../controller');
const { NewsMiddlewares } = require('../../middlewares');

const router = express.Router();

router.get('/everything', 
        NewsMiddlewares.validateFetchNews,
        NewsController.getAllNews);

router.get('/top-headlines', 
        NewsMiddlewares.validateFetchNews,
        NewsController.getTopHeadLines);

router.get('/top-headlines/sources', 
        NewsMiddlewares.validateFetchNews,
        NewsController.getAvailablePublishers);

module.exports = router;