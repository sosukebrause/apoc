const router = require("express").Router();
const auth = require("../middleware/auth");
const db = require("../models");
const controller = require("../controllers");

router.get("/api/feed/all", auth, async (req, res) => {
  const feedList = await db.Feed.find({ userId: req.user });
  res.json(feedList);
});

router.post("/api/feed/new", auth, async (req, res) => {
  try {
    const { title } = req.body;
    //validation
    if (!title)
      return res.status(400).json({ msg: "Complete required fields" });
    const newPost = new db.Feed({ title, userId: req.user });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/remove/:id", (req, res) => {
  db.Feed.findByIdAndRemove(req.params.id).then(() => res.send("success"));
});
module.exports = router;
