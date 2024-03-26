const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateFetchNews(req, res, next) {
    if(!req.headers['x-api-key']) {
        ErrorResponse.error = new AppError('Api key is not found in the incoming request', 400);
        return res
                .status(400)
                .json(ErrorResponse)
    }
    next();
}

module.exports = {
    validateFetchNews
}