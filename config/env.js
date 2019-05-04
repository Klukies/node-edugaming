const env = {
  host: "localhost",
  user: "EduGaming",
  password: "secret",
  database: "EduGaming",
  dialect: 'mysql',
  pool: {
   max: 5,
   min: 0,
   acquire: 30000,
   idle: 10000
 }
};

module.exports = env;
