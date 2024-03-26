const { default: axios } = require("axios");
const { ServerConfig } = require('../config');
const AppError = require("../utils/errors/app-error");

async function getAllNews(parameters, apiKey) {
    try {
        const news = await axios.get(ServerConfig.ALLNEWS, {
            params: parameters,
            headers: {
                "X-Api-Key": apiKey
            }
        });
        return news.data;
    } catch (error) {
        let msg = error.response.data.message;
        let statusCode = error.response.status;;
        throw new AppError(msg, statusCode);
    }
}

module.exports = {
    getAllNews
}