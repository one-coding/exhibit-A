const express = require("express");
const bcrypt = require("bcrypt");
const Post = require("../models/post");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      attributes: ["id", "name", "content", "createdAt"],
      order: [["createdAt", "DESC"]],
    });
    res.json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/post", async (req, res, next) => {
  try {
    const hash = await bcrypt.hash(req.body.password, 12);
    const newPost = await Post.create({
      name: req.body.name,
      password: hash,
      content: req.body.content,
      createdAt: Date.now(),
    });

    const fullPost = await Post.findOne({
      where: { id: newPost.id },
      attributes: ["id", "name", "content", "createdAt"],
    });
    res.status(201).json(fullPost);
  } catch (err) {
    console.error(err);
    next(err);
  }
});
module.exports = router;
