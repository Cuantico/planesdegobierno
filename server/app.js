const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors());

//connect to database
mongoose
  .connect(`mongodb://127.0.0.1:27017/${process.env.MONGO_DB}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => {
    app.listen(4000, () => {
      console.log("now listening for requests on port 4000");
    });
  }, console.log("connected to databe"))
  .catch(err => {
    console.log(err);
  });

/* mongoose.connection.once("open", () => {
  console.log("connected to databe"))
}); */

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
