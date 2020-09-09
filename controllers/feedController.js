module.exports = {
  findFeedList: function () {
    const db = require("../models");
    return new Promise((resolve, reject) => {
      db.Feed.find({
        userId,
      }).then((feeds) => {
        if (feeds)
          resolve({
            data: [],
          });
      });
    });
  },
};
