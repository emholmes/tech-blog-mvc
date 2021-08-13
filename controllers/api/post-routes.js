const router = require("express").Router();
const { Post, User, Comment } = require("../../models");
const sequelize = require('../../config/connection');


// get all posts
router.get("/", (req, res) => {
  Post.findAll({
    order: [[ "created_at", "DESC" ]],
    attributes: [
      "id", 
      "title", 
      "content", 
      "user_id", 
      "created_at"
    ]
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get post by id
router.get("/:id", (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    }, 
    attributes: [
      "id", 
      "title", 
      "content", 
      "user_id", 
      "created_at"
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id." });
        return;
      }
      res.json(dbPostData);
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

// post posts
router.post("/", (req, res) => {
  Post.create({
    title: req.body.title,
    post_url: req.body.post_url
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// put posts
// delete posts

module.exports = router;