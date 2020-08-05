const Post = require('../models/Post.js')
const postJSON = require("./post.json");
const User = require("../models/User");
const userJSON = require("./user.json");
const Inspiration = require("../models/Inspiration");
const inspirationJSON = require("./inspiration.json");

const postData = postJSON.map((item) => {
  vibe = {};
  vibe.post = item.post;
  vibe.comments = [...item.comments];
  return vibe;
});

const userData = userJSON.map((item) => {
  user = {};
  user.username = item.username;
  user.email = item.email;
  user.password = item.password;
  return user;
});

const inspirationData = inspirationJSON.map((item) => {
  inspiration = {};
  inspiration.name = item.name;
  inspiration.quote = item.quote;
  return inspiration;
});

Post.deleteMany({}).then(() => {
  Post.create(postData)
    .then((posts) => {
      console.log(posts);
    }) //console.log posts.then
    .then(
      User.deleteMany({}).then(() => {
        User.create(userData).then((users) => {
          console.log(users);
        }); //console.log users.then
      }) //User.deleteMany inside.then
    ) //User.deleteMany outside.then
    .then(
      Inspiration.deleteMany({}).then(() => {
        Inspiration.create(inspirationData).then((inspirations) => {
          console.log(inspirations);
          process.exit()
        });
      })
    );
});
