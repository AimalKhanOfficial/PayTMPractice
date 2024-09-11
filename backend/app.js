const express = require("express");
const admin = require("./routes/admin");
const user = require("./routes/user");
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.use("/admin", admin);
app.use("/user", user);

app.get("/", (req, res) => {
  return res.json({
    message: "Backend active and running",
  });
});

app.listen(port, () => {
  console.log(`>> Backend running on port ${port}`);
});
