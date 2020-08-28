const router = require("express").Router();
const auth = require("../middleware/auth.js");

router.post("/", auth, async (req, res) => {
  try {
    const { title, userId } = req.body;

    //validation

    if (!title)
      return res.status(400).json({ msg: "Not all fields are filled" });

    const newTodo = new Todo({ title, userId: auth.user });

    const savedTodo = await newTodo.save();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
