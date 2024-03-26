const { NewsService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');

async function getAllNews(req, res) {
    try {
        const apiKey = req.headers['x-api-key'];
        const news = await NewsService.getAllNews(req.query, apiKey);
        SuccessResponse.data = news;
        return res
                .status(200)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getTopHeadLines(req, res) {
    try {
        const apiKey = req.headers['x-api-key'];
        const news = await NewsService.getTopHeadLines(req.query, apiKey);
        SuccessResponse.data = news;
        return res
                .status(200)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


module.exports = {
    getAllNews,
    getTopHeadLines
};
