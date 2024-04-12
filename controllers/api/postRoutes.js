const router = require("express").Router();
const { Post, Comment, User } = require("../models");

//http://localhost:3001/api/post/:id
router.get("/", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [{ model: Comment }, { model: User }],
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }

    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/post
router.post("/", async (req, res) => {
  try {
    const postData = await Post.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.body.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/post/:id
router.put("/", async (req, res) => {
  try {
    const postData = await Post.update(
      {
        title: req.body.title,
        post_content: req.body.post_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!postData) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/post/:id
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: "No post found with that id!" });
      return;
    }

    res.status(200).json({ message: "No post found with that id!" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
