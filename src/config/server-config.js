const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    ALLNEWS: process.env.NEWS_URL,
    TOPHEADLINES: process.env.TOP_HEADLINES_URL,
    SOURCES: process.env.SOURCES
}