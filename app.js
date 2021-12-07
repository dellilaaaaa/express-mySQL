const express = require("express");
const Routers = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(Routers);

app.listen(PORT, () => {
  console.log("hasil yang tampil di " + PORT);
});
