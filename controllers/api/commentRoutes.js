const router = require("express").Router();
const { Comment, User, Post } = require("../../models");

//http://localhost:3001/api/comment
router.post("/", async (req, res) => {
  try {
    const commentData = await Comment.create({
      comment_content: req.body.comment_content,
      user_id: req.body.user_id,
      post_id: req.body.post_id,
    });
    res.status(500).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
