const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  post: String,
  comments: [String],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
