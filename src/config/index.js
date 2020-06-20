module.exports = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  CACHE_KEY: process.env.CACHE_KEY,
  SWAGGER_PATH: `../config/swagger/${process.env.SWAGGER_DOC}.json`,
};
