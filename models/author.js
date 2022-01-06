const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

// 'Author' is the table name in the DB
module.exports = mongoose.model("Author", authorSchema);
