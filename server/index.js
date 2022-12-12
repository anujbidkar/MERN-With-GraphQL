const express = require("express");
require("dotenv").config();

const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const port = process.env.PORT || 5001;
const connectDB = require("./config/db");
const app = express();
const colors = require("colors");
// connect to database mongo
connectDB();
console.log("process.env.MONGO_URI", process.env.MONGO_URI);
app.listen(port, console.log(`Server running on port ${port}`));

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.get("/", (req, res) => {
  res.send("welcome to anuj bidkar");
});
