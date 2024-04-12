const router = require("express").Router();
const { Post, Comment, User } = require("../models");

//http://localhost:3001
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User, attributes: ["username"] }, { model: Comment }],
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("home", { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//http://localhost:3001/login
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

module.exports = router;
