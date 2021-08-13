const router = require("express").Router();
const { Comment, User, Post } = require("../../models");

router.get("/", (req, res) => {
  Comment.findAll({
    attributes: [
      "id", 
      "comment_text",
      "user_id", 
      "post_id"
    ], 
    include: [
      {
        model: User,
        attributes: ["username"]
      },
      {
        model: Post,
        attributes: ["title"]
      }
    ]
  })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    post_id: req.body.post_id,
    user_id: req.body.user_id
  })
    .then(dbCommentData => {
      res.json(dbCommentData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;