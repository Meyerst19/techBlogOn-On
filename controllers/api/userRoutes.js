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

//http://localhost:3001/api/user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/user/:id
router.put("/", async (req, res) => {
  try {
    const userData = await User.update(
      {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      },
      {
        where: {
          id: req.params.id,
        },
        individualHooks: true,
      }
    );
    if (!userData) {
      res.status(404).json({ message: "No user found with that id! " });
      return;
    }
    res.status(200).json(err);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
