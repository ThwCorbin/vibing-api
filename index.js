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

app.post("/home/inspirations", (req,res) => {
  Inspiration.create(req.body)
  .then(inspiration => {
      res.json(inspiration)
  })
})

app.get("/home/users/", (req, res) => {
  User.find({}).then((users) => {
    res.json(users)
  })
})

app.post("/home/users/", (req,res) => {
  User.create(req.body)
  .then(user => {
      res.json(user)
  })
})

app.get("/home/posts/", (req, res) => {
  Post.find({}).then((posts) =>{
    res.json(posts)
  })
})

app.post("/home/posts/", (req,res) => {
  Post.create(req.body)
  .then(post => {
      res.json(post)
  })
})

app.listen(4000, () => {
    console.log("listening..")
})