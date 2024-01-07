const app = require("./app.js");
require("dotenv").config();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
