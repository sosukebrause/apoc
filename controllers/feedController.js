const db = require("../models");

module.exports = {
  getFeed: async (req, res) => {
    try {
      const allComments = await db.Feed.find({}).populate(
        "displayName",
        "text"
      );
      res.send(allComments);
    } catch (error) {
      res.send(error);
    }
  },
  newPost: async (req, res) => {
    try {
      const myComment = await db.Feed.create({
        text: req.body.text,
        // displayName: req.user.displayName,
        // location: req.query.city?
      });
      res.send(myComment);
    } catch (error) {
      res.send(error);
    }
  },
};
