const app = require("express")();
const Inspiration = require("./models/Inspiration");
const User = require("./models/User");
const Post = require("./models/Post");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.redirect("/home");
});

app.get("/home/inspirations", (req, res) => {
  Inspiration.find({}).then((inspirations) => {
    res.json(inspirations);
  });
});

app.get("/home/users/", (req, res) => {
  User.find({}).then((users) => {
    res.json(users)
  })
})

app.get("/home/posts/", (req, res) => {
  Post.find({}).then((posts) =>{
    res.json(posts)
  })
})

app.listen(4000, () => {
    console.log("listening..")
})