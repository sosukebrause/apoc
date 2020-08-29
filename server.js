const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
require("./models/connection");

//following three are added as per auth tutorial min: 5
const cors = require("cors");
require("dotenv").config();

//configure express server
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRoutes = require("./routes/api-routes");
<<<<<<< HEAD
app.use(apiRoutes);
app.use("/users", require("./routes/user-routes"));
app.use("/feed", require("./routes/feed-routes"));
=======
const CovidRoutes = require("./routes/covid-routes");
const userRoutes = require("./routes/user-routes");
app.use(apiRoutes);
app.use(CovidRoutes);
app.use("/users", userRoutes);
>>>>>>> e732fc442cd0d481b05b0a0c390dfcf431d99cba

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
