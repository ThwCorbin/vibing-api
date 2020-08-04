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
  Inspiration.find({}).then((inspiration) => {
    res.json(inspiration);
  });
});

app.listen(4000, () => {
    console.log("listening..")
})