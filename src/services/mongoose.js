/*
 * Mongoose Service
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const config = require("../config");
const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected");
});

mongoose.connection.on("error", (err) => {
  console.log(`Could not connect to MongoDB because of ${err}`);
  process.exit(1);
});

exports.connect = () => {
  mongoose.set("debug", true);
  mongoose.connect(config.mongodbUrl, {
    keepAlive: 1,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  return mongoose.connection;
};