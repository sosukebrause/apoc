let CityInfo = require("./models/city");
let mongoose = require("mongoose");
let Cities = require("./seedData/uscities.json")
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Apocalypse", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});


// console.log(Cities)

CityInfo.deleteMany({})
  .then(() => CityInfo.collection.insertMany(Cities))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });