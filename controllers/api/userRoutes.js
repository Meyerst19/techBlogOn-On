const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

//http://localhost:3001/api/user/:id
router.get("/", async (req, res) => {
  try {
    const userPostData = await User.findByPk(req.params.id, {
      include: [{ model: Post }, { model: Comment }],
    });

    if (!userPostData) {
      res.status(404).json({ message: "No user found with that id!" });
      return;
    }

    const posts = userPostData.map((post) => post.get({ plain: true }));

    res.render("dashboard", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    res.status(500).json(err);
  }
});
