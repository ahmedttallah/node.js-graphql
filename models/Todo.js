const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    detail: String,
    date: Date,
  },
  { timestamps: true }
);

Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
