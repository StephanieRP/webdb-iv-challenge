require("dotenv").config; //reads .env and merges

const server = require("./api/server/server.js");
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
