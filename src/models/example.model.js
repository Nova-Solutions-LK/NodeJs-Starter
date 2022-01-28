/*
 * Example Data Model
 * v1.0.0
 * Nova Solutions (Pvt) Ltd
 *
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema(
    {
      example_1: {
        type: String,
      },
      example_2: {
        type: String,
      },
    },
    {
      timestamps: false,
    }
  );
  
  module.exports = mongoose.model("Example", exampleSchema);
