const app = require("express")();
const Inspiration = require("./models/Inspiration");
const User = require("./models/User");
const Post = require("./models/Post");
const bodyParser = require("body-parser");
const cors = require("cors")

app.use(cors())

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

app.put ('/home/inspirations/:name', (req, res) => {
  Inspiration.findOneAndUpdate({name: req.params.name}, req.body, {new : true})
    .then(inspiration => {
      res.json(inspiration)
    })
})

app.get("/home/users/", (req, res) => {
  User.find({}).then((users) => {
    res.json(users)
  })
})

app.put ('/home/users/:username', (req, res) => {
  User.findOneAndUpdate({username: req.params.username}, req.body, {new : true})
    .then(user => {
      res.json(user)
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

app.put ('/home/posts/:id', (req, res) => {
  Post.findOneAndUpdate({_id: req.params.id}, req.body, {new : true})
    .then(post => {
      res.json(post)
      console.log
    })
})

app.listen(4000, () => {
    console.log("listening..")
})