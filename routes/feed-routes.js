const router = require("express").Router();
const auth = require("../middleware/auth");
const db = require("../models");
const controller = require("../controllers");
const mongoose = require("mongoose");

//get all posts based on user
router.get("/feed/user", auth, async (req, res) => {
  try {
    const feedList = await db.Feed.find({
      author: {
        // displayName: req.user.displayName,
        id: mongoose.Types.ObjectId(req.user),
      },
    });

    res.json(feedList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
//get all posts based on location
router.get("/feed/city", auth, async (req, res) => {
  try {
    // const { text } = req.body;
    const { city, state_name } = req.query;

    if (!city || !state_name)
      return res.status(400).json({ msg: "Please enter city and state" });

    const feedList = await db.Feed.find({
      location: {
        city: city,
        state_name: state_name,
      },
    }).populate({ path: "author.id", select: "displayName -_id" });
    res.json(feedList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/feed/new", auth, async (req, res) => {
  try {
    const { text } = req.body;
    const { city, state_name } = req.query;

    if (!city || !state_name)
      return res.status(400).json({ msg: "Please enter city and state" });

    // const location = `${city}, ${state_name}`;
    //validation
    if (!text) return res.status(400).json({ msg: "Complete required fields" });

    const newPost = new db.Feed({
      text,
      location: {
        city: city,
        state_name: state_name,
      },
      author: {
        id: req.user,
      },
    });
    console.log(newPost);
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.get("/feed/example", (req, res) => {
//   res.send("msg success from feed-route");
// });

router.delete("/remove/:id", (req, res) => {
  db.Feed.findByIdAndRemove(req.params.id).then(() => res.send("success"));
});
module.exports = router;
