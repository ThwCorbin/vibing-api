const Post = require("../models/Post")
const postJSON = require("./post.json")
const User = require("../models/User")
const userJSON = require("./user.json")
const Inspiration = require("../models/Inspiration")
const inspirationJSON = require("./inspiration.json")

const postData = postJSON.map((item) => {
    vibe = {};
    vibe.post =item.post
    vibe.comments = [...item.comments]
    return vibe
})



