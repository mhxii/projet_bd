// const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.url = process.env.MONGODB_URI;;

db.publication = require("./publication.js")(mongoose);

module.exports = db;
