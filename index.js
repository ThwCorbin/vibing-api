const app = require("express")();
const Inspiration = require("./models/Inspiration");
const User = require("./models/User");
const Post = require("./models/vibe");
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


app.put ('/home/inspirations/:id', (req, res) => {
  Inspiration.findOneAndUpdate({_id: req.params.id}, req.body, {new : true})
    .then(inspiration => {
      res.json(inspiration)
    })
})

app.delete ('/home/inspirations/:id', (req, res) => {
  Inspiration.findOneAndDelete({_id: req.params.id})
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

app.delete ('/home/users/:username', (req, res) => {
  User.findOneAndDelete({username: req.params.username})
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
    })
})

app.delete ('/home/posts/:id', (req, res) => {
  Post.findOneAndDelete({_id: req.params.id})
    .then(post => {
      res.json(post)
    })
})

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

