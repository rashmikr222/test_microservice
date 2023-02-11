const dotenv = require('dotenv')
const path = require('path');
const envCmdrcPath = path.join(__dirname, "..", ".env-cmdrc")
console.log("env-cmdrc file path ==> ", envCmdrcPath);

dotenv.config({ path: envCmdrcPath })

const CONSTANT_STRINGS = {
    PORT: process.env.PORT,
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
    HOST: process.env.HOST,
    DB_USERNAME: process.env.USERNAME,
    DB_PASSWORD: process.env.PASSWORD,
    DB_NAME: process.env.DATABASE_NAME,
    MAIL_QUEUE: process.env.MAIL_QUEUE,
    BASEURL: process.env.BASEURL
}


module.exports = { CONSTANT_STRINGS }